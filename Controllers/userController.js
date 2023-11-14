const users = require('../Models/userScheme')

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