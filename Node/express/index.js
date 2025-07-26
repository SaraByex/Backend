// framework built on node.js
//build server, api
//handlr http request, routing, middleare

let express = require("express");
const app = express();
const port = 3000;
//app method e.g get/post/pu/delete  (route, callbackfn)

let countries = {
    Japan: "Tokyo",
    Canada: "Ottawa",
    UAE: "AbuDhabi",
    India: "Delhi",
    Uganda: "Kampala",
    Nigeria: "Lagos"
        
    }

app.get("/countries/:country", function(req, res){
    const country = req.params
let capital = countries[country]
res.send(`The country is + ${country} the capital is ${capital}`)
});  

app.get("/", function(req, res){
    res.send("This is cohort 2025")
})

app.get("/countries", function (req, res){
    res.send(countries)
});

app.get("/calculator", function (req, res){
    res.send("This is a calculator")
});

app.get("/countries/:country", function(req, res){
    console.log("req", req.params)

})
//binds and listens for connection between a port and a host
app.listen(port, ()=>{
    console.log("server started")
});

//routing