<template>
    <v-container>
        <v-row>
            <v-col class="d-flex align-center justify-center">
                <v-btn class="mr-2" @click="isStreaming ? stopStream() : startStream()">{{ isStreaming ? 'Stop' : 'Start'}}</v-btn>
                <v-btn class="mL-2" @click="restartStream">Restart</v-btn>
            </v-col>
        </v-row>

        <v-row v-show="loadingTweets">
            <v-col class="d-flex align-center justify-center">
                <v-progress-circular
                    indeterminate
                    color="secondary"
                ></v-progress-circular>
            </v-col>
        </v-row>
        
        <v-row v-for="tweet in tweets" :key="tweet.id">
            <Comment :tweet="tweet"/>
        </v-row>
    </v-container>
</template>

<script>
import io from 'socket.io-client'
import Comment from '@/components/Comment'

export default {
    name: 'Chat',
    data () {
        return {
            socket: io('http://localhost:3000'),
            tweets: [],
            isStreaming: false,
            loadingTweets: false
        }
    },
    mounted() {
        this.socket.on('updateTweets', (tweet) => {
            if (this.tweets.length === 0) {
                this.tweets.push(tweet)
                this.loadingTweets = false
            } else if (this.tweets.length <= 99) {
                this.tweets.push(tweet)
                this.loadingTweets = false
            } else {
                this.tweets.shift()
                this.tweets.push(tweet)
                this.loadingTweets = false
            }
        })
    },
    methods: {
        startStream() {
            this.loadingTweets = true
            this.tweets = []
            this.socket.emit('start stream')
            this.isStreaming = true
        },
        restartStream() {
            this.loadingTweets = true
            this.tweets = []
            this.socket.emit('restart stream')
            this.isStreaming = true
        },
        stopStream() {
            this.loadingTweets = false
            this.socket.emit('stop stream')
            this.isStreaming = false
        }
    },
    components: {
        Comment
    }
}
</script>