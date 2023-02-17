const express = require("express");

const app = express();

app.get("/",  (req, res) => {
    res.send("<h1>Hello</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>about</h1>");
})

app.get("/hobbies", (req, res) => {
    res.send("<h1>Hobbies</h1>")
})

app.listen(3000, function (){
        console.log("Server Started On Port 3000")
});