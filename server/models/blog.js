const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blogSchema = new Schema({
name: {
    type: String,
    required: false
},
title: {
    type: String,
    required: false
},
entry: {
    type: String,
    required: false
},
reply: {
     type: String,
     required: false
 }

})

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog