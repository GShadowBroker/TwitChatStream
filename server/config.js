'use strict'

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

module.exports = {
    hostname: '127.0.0.1',
    port: process.env.PORT || 3000,
    termsToTrack: ['BBB'],
    credentials: {
        access_token: process.env.ACCESS_TOKEN,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET,
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        timeout_ms: 60 * 1000,
        strict_SSL: true
    }
}