const authorize = (req,res,next) =>{
    const { user } = req.query
    if (user === 'jhon'){
        req.user = { name :'jhon',id :'19'}
        next()
    }else {
        res.status(401).send("Unauthorize")
    }
}

module.exports = authorize