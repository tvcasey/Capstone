const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');
const blogs = require('./routes/blogs');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/api/blogs', blogs)

const uri = config.get('mongoURI');
console.log(uri);

mongoose.connect(uri, {
    useNewUrlParser: true,
    //useUnifiedTechnology: true,
    useUnifiedTopology: true
    }, (err) => {
        if(err){
            throw err
        }else{
            console.log('MongoDB Connected');
        }
    });


app.listen(port, () => console.log(`You better believe that this thing is running on Port: ${port}`));
