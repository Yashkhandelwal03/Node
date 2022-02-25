const express = require ('express');
const path = require('path');
const app = express();

const port = 5000;
// app.set("view engine","hbs");

app.set("view engine","hbs");

app.get("/",(req,res) =>{
    res.render("index");
})

// app.get("/",(req,res)=>{
//     res.send("<h1>Hello world!!! welcome to Gopal's world</h1>")
// })

app.listen(port , (req,res)=>{
    console.log(`Listening at port ${port}`);
})