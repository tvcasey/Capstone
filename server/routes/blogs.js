const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const Reply = require('../models/replies');
const blogs = require('./blogs');

//get blogs  CHECK FOR RIGHT VARIABLES!!
router.get('/', (req, res) => {
    console.log("get was hit");
    Blog.find()
    .then(blogs => res.json(blogs))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

//add blog  CHECK FOR RIGHT VARIABLES!!
router.post('/add', (req, res) => {
    console.log("It got through!");
    const newBlog = new Blog({
        name: req.body.name,
        title: req.body.title,
        entry: req.body.entry,
        reply: req.body.reply,
    });

    newBlog
    .save()
    .then(() => res.json("Your post is on the blog!"))
    .catch(err => res.status(400).json(`Error: ${err}`));

});

// post a Reply Only Field to a Post

{/* router.post('/api/replies/add/reply', (req, res) => {
    console.log("Baby Ruth!");
    const newReply = new Reply({
        reply: req.body.reply,
       });
    newReply
    .save()
    .then(() => res.json("Your reply is on the blog!"))
    .catch(err => res.status(400).json(`Error: ${err}`));

});*/} 

// get post by id CHECK FOR RIGHT VARIABLES!
router.get('/:id', (req, res) => {
    Blog.findById(req.params.id)
    .then(blogs => res.json(blogs))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// put NEEDS TO CATERED TO A REPLY TO POST
router.put('/reply/:id', (req, res) => {
    Blog.findById(req.params.id)
    .then(blogs => {
        blogs.name = req.body.name;
        blogs.title = req.body.title;
        blogs.entry = req.body.entry;

        blogs
        .save()
        .then(() => res.json("A reply has been sent."))
        .catch(err => res.status(400).json(`Error: ${err}`))
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
})

// delete a post by id
router.delete('/_id', (req, res) => {
    Blog.findByIdAndDelete(req.body._id)
    .then(() => res.json("Hey man this file is deleted!"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

    



module.exports = router;