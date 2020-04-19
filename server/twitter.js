'use strict';

const Twit = require('twit');
const config = require('./config');

const T = new Twit(config.credentials);

let stream = T.stream('statuses/filter', { track: '#RedeBBB' });
let isStreamStopped = false;

module.exports = (io) => {
    io.on('connection', (socket) => {

        console.log(`Socket ${socket.id} connected.`);

        socket.on('start stream', () => {
            console.log('Started streaming tweets');

            if (!isStreamStopped) {
                stream.stop();
            }

            stream.on('tweet', function (tweet) { //This is WRONG! Don't put an event handler into another! You'll get duplicate messages.
                if (!tweet.retweeted_status && !tweet.in_reply_to_status_id_str) {
                    console.log(`Sending ${tweet.user.screen_name}'s tweet.`);
                    socket.emit('updateTweets', tweet);
                }
            });

            stream.start();

            isStreamStopped = false;
        });

        socket.on('restart stream', () => {
            console.log('Restarted streaming.');
            stream.start();
            isStreamStopped = false;
        });

        socket.on('stop stream', () => {
            console.log('Stopped streaming.');
            stream.stop();
            isStreamStopped = true;
        });
        
    });

    io.on('disconnect', () => console.log('A user has disconnected.'));
};