const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser")
//body parser enables u access the data. urlencoder defines wht the data u get should be
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Hello this is WIT")
})

app.get("/form", (req, res) =>{
    res.sendFile(__dirname + "/public/form.html")
})

app.post("/userData", (req, res) =>{
    console.log(req.body)
    //to accees student name//
    let studentName = req.body.userName;
    let phoneNumber = req.body.userPhn;
    let course = req.body.course
    if(!userName || !phoneNumber || !course){
    res.send(`You have navigated to user Data Page.  Here are your details
        name = ${studentName}
        Phone = ${phoneNumber}
        course = ${course}`)
    }
})

app.listen(port, ()=>{
    console.log(`app is listening at ${port}`)
})


