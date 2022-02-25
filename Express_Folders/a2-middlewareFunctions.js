const express = require ('express');
const app = express();
const logger = require('./a3-logger');
const authorize = require('./a4-authorize');

app.use([logger,authorize])

app.get('/',logger,(req,res) =>{
    res.send('Home Page');
})

app.get('/about',(req,res) =>{
    res.send('About Page');
})

app.listen(5000,()=>{
    console.log('Listening at 5000..')
})