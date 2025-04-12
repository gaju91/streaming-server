const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const videoHandler = require('./video-stream');
const chunkHandler = require('./chunked-json');
const sseHandler = require('./server-side-events');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/video', videoHandler);

app.use('/chunked', chunkHandler);

app.use('/events', sseHandler);

wss.on('connection', (ws) => {
    console.log('🟢 WebSocket connected');
    ws.send('👋 Hello from wss server!');

    ws.on('message', (message) => {
        console.log('📨 Received:', message);
        ws.send(`🔁 Server received: ${message}`);
    });

    ws.on('close', () => {
        console.log('🔴 Client disconnected');
    });
});

server.listen(3000, () => {
    console.log(`🟢 Server started on port 3000`)
})