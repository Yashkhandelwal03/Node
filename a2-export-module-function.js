//Syntax for exporting functions

const name = (name) =>{
    console.log('Hi There '+ name);
}

const add = (num1,num2) =>{
    console.log('The sum is'+(num1+num2));
}
name('Nitish');
module.exports.add1 = add;
module.exports.name = name;