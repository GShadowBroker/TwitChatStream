'use strict'

const express = require('express')
const http = require('http')
const config = require('./config')

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

const tweetsRoute = require('./twitter')

tweetsRoute(io)

app.use(express.json())
app.get('/', (req, res) => res.send('<h1>HELLO WORLD</h1>'))

server.listen(config.port, () => {
    console.log(`Running server on ${config.hostname}:${config.port}`)
})