const express = require('express');
const router = express.Router();
const Blogs = require('..models/blogs');

router.get('/', (req, res) => {
    Blogs.find()
    .then(post => res.json(post))
    .catch(err => res.status(400).res.json(`Error: ${err}`));
});

module.exports = router;