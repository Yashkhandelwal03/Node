const express = require ('express');
const path = require ('path');
// const hbs = require ('hbs');
const app = express();

// app.get('/',(req,res) =>{
//     res.send("Hello from Express")
// })

// app.get('/about',(req,res) =>{
//     res.send("Hello from About")
// })


//Hearing static HTML files

// const {support} = require('./details');

// console.log(path.join(__dirname+"/public"));

// In order to host static HTML files using Express
// const support = path.join(__dirname+"/public");

// Use to hear static HTML files
// app.use(express.static(support));



//Creating hbs file

// app.set("view engine","hbs");
//When ever we are working with template engines use res.render() -->>render is used to  host dynamic content
//Usually the render function works with the second (res) call back function and you can give any name to it.
app.set("view engine","hbs");
app.get("/",(req,res) => {
    res.render("index");
})

//Creating JSON File

// console.log(__dirname);

// app.get('/',(req,res)=>{
//     console.log(req);                  
//     res.json(support)
// })


//Creating an error  page

app.get("*",(req,res)=>{
    res.send("404 Error");
})


//listening the website
app.listen(5000,()=>{
    console.log("listening at port 5000");
})