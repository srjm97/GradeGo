const express = require('express')
const mongoose = require("mongoose");
const db = 'mongodb+srv://StudentTracker:EBJempYE3pbx4xSQ@cluster0.i8kgzaf.mongodb.net/node_system'
const Login = require("./models/Login");

mongoose.connect(db,{
    useNewurlParser: true,
    useunifiedTopology: true,
    family:4
    });


const app = express()
const cors = require('cors')
//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//routes

app.use(require('./routes/login'))
app.use(require('./routes/users'))
app.use(require('./routes/index'))
app.use(require('./routes/staffAdvisor'))

app.listen(1337, ()=>{
    console.log('Server running in http://localhost:1337')

})