const logger = (req,res,next) =>{
    const url = req.url
    const method = req.method
    const time = new Date().getFullYear()
    console.log(method,url,time);
    // res.send("Hello World")
    next()
}

module.exports = logger