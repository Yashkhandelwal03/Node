//Modules - Encapsulated Code

const names = require('./a3-export-module-name');
// const functions = require('./a2-export-module-function');
const papa = require('./a4-more-export-module-syntax');
const {add1,name} = require('./a2-export-module-function');

console.log(papa);
add1(1,2);
name('Gopal');

// functions('Happy');
// functions(names.jhon);
// functions(names.jimmy);
// console.log(names);