const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blogSchema = new Schema({
name: {
    type: String,
    required: true
},
title: {
    type: String,
    required: true
},
post: {
    type: String,
    required: true
}
})

const Blogs = mongoose.model("Blog", blogSchema);

module.exports = Blogs