// import modules and assign express
const bodyParser = require('body-parser');
const { json } = require('express');
const express = require('express');
const app = express();
const http = require('http');


// Routes for the api endpoints 

var pjson = require('./package.json');

app.use(express.json()); // for parsing application/json

// GET endpoint to respond with the app version in package.json

app.get("/version", function (req, res) {
    res.json({'version': pjson.version});
});

// GET endpoint to respond with request number being prime (true) or not (false)

app.get("/is_prime", function (req, res) {
    var prime = true;
    var num = req.body.number

    if (num === 1 || num < 1) {
        var prime =  false;
    }
    else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                var prime = false;
            }
        } 
    }
    else { 
        var prime = true 
    }

    res.json({ "number": req.body.number, "is_prime": prime });
});


app.get("/weather", function (req, res) {

    var zipcode = req.body.zipcode
    var appid = '4fd4e4733ecdfd7b2f7d46b77ee6a25a'

    var options = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.openweathermap.org/data/2.5/weather?zip="+zipcode+"&appid="+appid,
        "method": "GET",
    }
    console.log(zipcode)
    console.log(appid)
    http.get(options, function(response) {    
        var result = "";
        var responseCode = response.statusCode;

        response.on('data', function(data) {
          result += data;
        });

        response.on('end', function() {
            if(responseCode >= 400)
                return done(result, null);
            else
                res.json({ "zipcode": req.body.zipcode, "current_weather": result })
        });
    }); 
});

// export app module
module.exports = app;

