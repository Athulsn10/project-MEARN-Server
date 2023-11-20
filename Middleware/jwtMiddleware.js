const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log("inside jwtMiddleware");
    const token = req.headers['authorization'].split(" ")[1]
    console.log("token: " + token);
    try{
    const jwtResponse = jwt.verify(token,"superSecretKey123")
    console.log('JWT verified successfully:', jwtResponse);
    req.payload = jwtResponse.userId
    next()
    }catch(err){
        res.status(401).json("Authorisation failed!! Try Again")
        console.log("Authorisation failed!!");
    }
}

module.exports = jwtMiddleware