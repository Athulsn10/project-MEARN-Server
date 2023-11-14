
// loads .env file contents into process.env by default
require('dotenv').config()
const express = require('express')
const cors = require('cors')
// creates an express application
const pfServer = express()
// import router from router.js
const router = require('./Routes/router')
require('./DB/connection')


pfServer.use(cors()) // using cors in server
pfServer.use(express.json()) // parse json into the application
pfServer.use(router) // import router from router.js

const PORT = 4000 || process.env.PORT // set port number
pfServer.listen(PORT, ()=>{ // run server app
    console.log(`server is running on ${PORT}`)
})

// get request
pfServer.get('/',(req,res)=>{
    res.send(`<h1>Project Fair Server Started in port 4000</h1>`)
})

// // post request
// pfServer.post('/',(req,res)=>{
//     res.send("post request")
// })

