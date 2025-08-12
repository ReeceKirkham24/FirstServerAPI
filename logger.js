const logger = (req, res, next) => { //next parameter -> allows request to pass through it 
    console.log(req.method, req.originalUrl);
    next()
}

module.exports = logger