const fs = require('fs');
// fs.writeFileSync("read.txt","Welcome to my channel");
fs.writeFileSync("read.txt","Welcome to my ,Yash Talks");
fs.writeFileSync("./Thapa/happiness.js","Hello! Every one");
fs.unlinkSync("./Thapa/happiness.js");
fs.rmdirSync("Thapa");