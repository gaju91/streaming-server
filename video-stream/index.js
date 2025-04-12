const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        const videoPath = path.join(process.cwd(), 'public', 'video.mp4');

        // Check if video file exists
        if (!fs.existsSync(videoPath)) {
            return res.status(404).send('Video file not found');
        }

        const stat = fs.statSync(videoPath);

        // Get the file size
        const fileSize = stat.size;

        // Check if browser sent a range header
        const range = req.headers.range;

        if (range) {
            // Example: "bytes=1000-"
            const parts = range.replace(/bytes=/, "").split("-");
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

            const chunkSize = end - start + 1;

            const fileStream = fs.createReadStream(videoPath, { start, end });

            // Tell browser we're sending part of the file
            res.writeHead(206, {
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunkSize,
                'Content-Type': 'video/mp4',
            });

            console.log(`Streaming video: ${start} - ${end} of ${fileSize}`);

            fileStream.pipe(res);
        } else {
            // No range header: send full video
            res.writeHead(200, {
                'Content-Length': fileSize,
                'Content-Type': 'video/mp4',
            });

            console.log(`Streaming full video: 0 - ${fileSize}`);

            fs.createReadStream(videoPath).pipe(res);
        }
    });

module.exports = router;