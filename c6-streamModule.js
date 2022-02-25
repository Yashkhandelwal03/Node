const fs = require ('fs');
const http = require ('http');

const server = http.createServer();

server.on("request",(req,res) =>{
    const rstream = fs.createReadStream("writes.txt");
    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata);
    // });
    rstream.on('end',(res) => {
        res.end(res);
    })
    rstream.on('error',() => {
        res.end("there's an error!!!");
    })
    //3rd way of reading and writing
    // const rstream = fs.createReadStream("write.txt");
    // rstream.pipe(res);
})

server.listen(8000,"127.0.0.1");