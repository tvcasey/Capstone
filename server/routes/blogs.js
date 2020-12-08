const express = require('express');
const router = express.Router();
const Blogs = require('..models/blogs');

//get blogs  CHECK FOR RIGHT VARIABLES!!
router.get('/', (req, res) => {
    Blogs.find()
    .then(entries => res.json(entries))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

//add blog  CHECK FOR RIGHT VARIABLES!!
router.post('add', (req, res) => {
    const newBlog = new Blogs({
        name: req.body.name,
        title: req.body.title,
        entry: req.body.entry
    });

    newBlog
    .save()
    .then(() => res.json("Your post is on the blog!"))
    .catch(err => res.status(400).json(`Error: ${err}`));

});
// get post by id CHECK FOR RIGHT VARIABLES!
router.get('/:id', (req, res) => {
    Blogs.findById(req.params.id)
    .then(entries => res.json(entries))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// put NEEDS TO CATERED TO A REPLY TO POST
router.put('reply/:id', (req, res) => {
    Blogs.findById(req.params.id)
    .then(entries => {
        entries.name = req.body.name;
        entries.title = req.body.title;
        entries.entry = req.body.entry;

        entries
        .save()
        .then(() => res.json("A reply has been sent."))
        .catch(err => res.status(400).json(`Error: ${err}`))
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
})

// delete a post by id
router.delete('/:id', (req, res) => {
    Blogs.findByIdAndDelete(req.params.id)
    .then(() => res.json("Hey man this file is deleted!"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

    



module.exports = router;