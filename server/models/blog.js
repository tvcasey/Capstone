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
entry: {
    type: String,
    required: true
},
reply: {
     type: String,
     required: true
 }

})

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog