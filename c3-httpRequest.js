const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    fs.readFile("details.json","utf-8",(err,data)=>{
        // console.log(data);
        const objData = JSON.parse(data);
        res.end(data);
    })
    if(req.url == '/'){
        // res.end("Hello from other sides");
    }else{
        res.end("Error");
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port 8000");
})