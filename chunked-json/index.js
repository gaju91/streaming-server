const express = require('express');
const router = express.Router();

router
    .route('/')
    .get(async (req, res) => {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Transfer-Encoding': 'chunked',
        });
    
        let count = 0;
        const maxChunks = 5;
    
        const interval = setInterval(() => {
            count++;
    
            res.write(`\n💡 Chunk ${count} sent at ${count * 2}s\n`);
    
            if (count === maxChunks) {
                clearInterval(interval);
                res.write('\n🟢 All chunks sent.\n');
                res.end();
            }
        }, 2000); // every 2 seconds
    });

module.exports = router;