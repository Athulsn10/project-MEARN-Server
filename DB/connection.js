const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log('MongoDB Atlas Connected With Server');
}).catch((err)=>{
    console.log(`MongoDB Connection Failed :${err}`);
})