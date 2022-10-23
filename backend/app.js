const express = require("express");
const app = express();

const bodyParser = require('body-parser');

const cors = require('cors');
const request = require("request");


// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// Main api
const url = 'https://api.chucknorris.io/jokes';

//routes
app.get('/',async (req, res) =>{
    res.send('<h1>Chuck Noris Joke</h1>');
});

// get random chuck noris joke
app.get("/jokes/random", async (req, res) =>{
    try { 
        request(`${url}/random?category=${req.query.category}`, function(error, response){
            var joke = JSON.parse(response.body);
            res.json(joke);
       }, err =>{
           res.json(err);
       });
    } catch (err){
        console.log(err);
        res.json({message: err})
    }
});

// get all categories
app.get("/jokes/categories", async (req, res)=>{
    try {
       request(`${url}/categories`, function(error, response){
            var cat = JSON.parse(response.body);
            res.json(cat);
       });
    } catch (err){
        res.json({message: err})
        console.error(err);
    }
});

app.listen(3000, ()=> console.log("Chuck Noris Wrapper Server Ready!"));