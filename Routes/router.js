// import express
const express = require('express')
// create router objects
const router = new express.Router()
// import controller
const userController = require('../Controllers/userController')
const projectController = require("../Controllers/projectController")
const jwtMiddleware = require('../Middleware/jwtMiddleware')
const multerConfig = require('../Middleware/multerMiddleware')
// using router objects create routes

// register API
router.post('/user/register',userController.register)
// login
router.post('/user/login',userController.login)
// add project
// router.post("/project/add",jwtMiddleware,projectController.addProject)
// multer
router.post('/project/add', jwtMiddleware, multerConfig.single('projectImage'), projectController.addProjects)

// get user project
router.get('/user/all-projects',jwtMiddleware,projectController.allUserProjects)
// get all projects
router.get('/projects/all',jwtMiddleware,projectController.getallProjects)


// export router
module.exports = router