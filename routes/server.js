const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.mongoURI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTechnology: true
    });

const connection = mongoose.connection;
connection.once("open", () =>
    console.log("MongoDB Hey, hey, hey it's here to stay!!!")
);

app.listen(port, () => console.log(`You better believe that this thing is running on Port: ${port}`));
