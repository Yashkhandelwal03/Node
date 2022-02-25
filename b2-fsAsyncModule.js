const fs = require('fs');
fs.writeFile("write.txt","Happiness",(err) =>{
    console.log("Task Completed");
    console.log(err);
})