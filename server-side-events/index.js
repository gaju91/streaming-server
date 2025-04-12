const express = require('express');
const router = express.Router();

router
    .route('/')
    .get(async (req, res) => {
        /** Specifically for this endpoint and that's to when testing, don't apply this in prod*/
        res.set('Access-Control-Allow-Origin', '*');

        res.set({
            'Content-Type': 'text/event-stream',
            'cache-controler': 'no-cache',
            'connection': 'keep-alive'
        });

        // flush the header to know we are setting up SSE connection
        res.flushHeaders();
    
        let count = 0;
        const maxChunks = 3;
    
        const interval = setInterval(() => {
            count++;
    
            // This is very specific notation: [data: {message} \n\n]
            res.write(`data: 🔃 Update ${count} at ${new Date().toLocaleDateString()} \n\n`);
    
            if (count === maxChunks) {
                clearInterval(interval);
                res.write(`event: close\ndata: ✅ Done streaming\n\n`);
                res.end();
            }
        }, 1000); // every 1 seconds

        req.on('close', () => {
            console.log('👋 Client disconnected from SSE');
            clearInterval(interval);
        })
    });

module.exports = router;