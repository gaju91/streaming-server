const express = require('express');
const app = express();
const path = require('path');

const videoHandler = require('./video-stream');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/video', videoHandler);

app.listen(3000, () => {
    console.log(`🟢 Server started on port 3000`)
})