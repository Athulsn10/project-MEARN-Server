const users = require('../Models/userScheme')
const jwt = require('jsonwebtoken')

// register
exports.register= async (req,res)=>{
    console.log('inside register controller');
    const {username,email,password} = req.body
    // console.log(`${username}, ${email},${password}`);

   try
   {
    const existingUser = await users.findOne({email})
    if(existingUser){
        res.status(406).json("User already exist")
    }else{
        const newUser = new users({
            username,email,password,github:"",linkedin:"",profile:""
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
    }catch{
        res.status(401).json(`Register API failed, Error: ${err}`)
    }
}

// login
exports.login = async (req, res)=>{
    console.log('inside login controller');
    const {email,password} = req.body
    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},"thegodofstories")
            res.status(200).json({
                existingUser,token
            })
        }else{
            res.status(404).json(`Incorrect User Credentials`)
        }
    }catch(err){
        res.status(401).json(`login API failed: ${err}`)
    }
}