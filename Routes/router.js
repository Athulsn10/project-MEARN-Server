// import express
const express = require('express')
// create router objects
const router = new express.Router()
// import controller
const userController = require('../Controllers/userController')
// using router objects create routes
// register API
router.post('/user/register',userController.register)


// export router
module.exports = router