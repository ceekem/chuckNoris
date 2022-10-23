const express = require("express");
const app = express();

const bodyParser = require('body-parser');

const cors = require('cors');
const request = require("request");


// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

const url = 'https://api.chucknorris.io/jokes';

//routes
app.get('/',async (req, res) =>{
    res.send('<h1>Chuck Noris Joke</h1>');
});

app.get("/jokes/random", async (req, res) =>{
    try { 

        // res.json(req.query.category);

        request(`${url}/random?category=${req.query.category}`, function(err, body){
            var joke = JSON.parse(body.body);
            res.json(joke);
       }, err =>{
           res.json(err);
       });
    } catch (err){
        console.log(err);
        res.json({message: err})
    }
});

app.get("/jokes/categories", async (req, res)=>{
    try {
        
       request(`${url}/categories`, function(err, body){
            var cat = JSON.parse(body.body);
            res.json(cat);
       });
    } catch (err){
        res.json({message: err})
        console.error(err);
    }
});

app.listen(3001, ()=> console.log("Chuck Noris  Wrapper Server Ready!"));