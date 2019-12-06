
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 1111;

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

mongoose.connect('mongodb://localhost/shopping')
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true ,useNewUrlParser: true  }));

// parse application/json
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    res.render("index")
})

require('./routers/router')(app)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});