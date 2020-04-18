<template>
  <v-container>
      <h1>Streaming tweets</h1>
      <v-btn @click="startStream">Start</v-btn>
      <v-btn @click="stopStream">Stop</v-btn>
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
            isStreaming: false
        }
    },
    mounted() {
        this.socket.on('updateTweets', (tweet) => {
            if (this.tweets.length <= 99) {
                this.tweets.push(tweet)
            } else {
                this.tweets.shift()
                this.tweets.push(tweet)
            }
        })
    },
    methods: {
        startStream() {
            this.socket.emit('start stream')
            this.isStreaming = true
        },
        restartStream() {
            this.socket.emit('restart stream')
            this.isStreaming = true
        },
        stopStream() {
            this.socket.emit('stop stream')
            this.isStreaming = false
        }
    },
    components: {
        Comment
    }
}
</script>