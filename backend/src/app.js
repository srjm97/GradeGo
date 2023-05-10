const express = require('express')
const Login = require("./models/Login");
const mongoose = require('./connect/mongoose')

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