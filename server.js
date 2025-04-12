const express = require('express');
const app = express();
const path = require('path');

const videoHandler = require('./video-stream');
const chunkHandler = require('./chunked-json');
const sseHandler = require('./server-side-events');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/video', videoHandler);

app.use('/chunked', chunkHandler);

app.use('/events', sseHandler);

app.listen(3000, () => {
    console.log(`🟢 Server started on port 3000`)
})