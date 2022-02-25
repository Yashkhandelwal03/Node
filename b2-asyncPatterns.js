const { readFile } = require('fs');

//For reading two or more files
const getPromise = (path) =>{
    return new Promise((resolve,reject) =>{
        readFile(path,"utf-8",(err,res)=>{
            if(err){
                reject(err);
            }else{
                resolve(res);
                console.log(res);
            }
        })
    })
}

//Used to get the result and catch the error and output
getPromise("write.txt").then((result) => {console.log(result)}).catch((err) =>{console.log(err)})

//Do it similar for async await





// readFile("write.txt","utf-8",(err,res)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(res);
//     }
// })
