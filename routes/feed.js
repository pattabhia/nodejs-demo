const express = require('express');
const router = express.Router();

router.get('/feed', (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'First Post', content: 'This is the first post!' }]
    });
});