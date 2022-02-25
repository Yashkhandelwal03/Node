const eventEmmitter = require ('events');

const event = new eventEmmitter();

//We can also pass it without parameters

event.on('saveFile',(code,msg)=>{
    console.log(`The file recieved is ${msg} and the code is ${code}`);
})

event.emit('saveFile',200,'ok');
