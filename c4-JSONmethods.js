const fs = require('fs');

const bioData = {
    name : 'Gopal',
    age : 23,
    major : "Information Technology"
};

const formatter = JSON.stringify(bioData);
fs.writeFileSync("read.txt",formatter);
const readfile = fs.readFileSync("read.txt");
const binaryFile = readfile.toString();
// console.log(binaryFile);
const deFormatter = JSON.parse(binaryFile);
// console.log(deFormatter);

// console.log(formatter);
//{"name":"Gopal","age":23,"major":"Information Technology"}