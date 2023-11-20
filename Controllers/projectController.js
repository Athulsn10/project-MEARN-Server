const projects =require('../Models/projectSchema')


exports.addProjects = async (req,res)=>{
    console.log("inside and project function");
    const userId = req.payload
    console.log(`${userId}`);
    const projectImage = req.file.filename
    console.log(projectImage);
    const {title,languages,overview,github,website} = req.body
    console.log(`${title}, ${languages}, ${overview}, ${github}, ${website}`);
    res.status(200).json("addProjects request recieved!!")
try{
    const existingProject = await projects.findOne({github})
    if(existingProject){
        res.status(406).json("Project already exist!")
    }else{
        const newProject = newProject({
            title,languages,overview,github,website,projectImage,userId
        })
        await newProject.save()
        res.status(200).json(newProject)
    }
}catch(err){
    res.status(401).json(`Request failed, Error:${err}`)
}
}

// get user projects
exports.allUserProjects = async (req,res)=>{
    const userId = req.payload
    try{
        const userProjects =await projects.find({userId})
        res.status(200).json(userProjects)
    }catch(err){
        res.status(401).json(err)
    }
}

// get all projects
exports.getallProjects = async (req,res)=>{
    try{
        const allProjects =await projects.find()
        res.status(200).json(allProjects)
    }catch(err){
        res.status(401).json(err)
    }
}

// gethomeprojects
exports.getHomeProjects = aync (req,res)=>{
    try{
        const homeprojects = await projects.find().limit(3)
        res.status(200).json(homeprojects)
    }catch(err){
        res.status(401).json(err)
    }
}