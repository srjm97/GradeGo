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

//routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/login', async (req, res) => {
    console.log(req.body)
    // check in db if he is a valid user if he is then redirect to dashboard
    const {username, password} = req.body
    console.log(username, password)
    const userpass = await Login.findOne({ username: username }, { password: 1 });
    console.log(userpass)
    if(userpass){
      if (userpass.password == password){
        console.log('valid user')
        res.json({status:'ok'})
      }
      else {
        console.log('invalid password')
        res.json({status:'error', error:'Invalid Password'})
      }
    }
    else {
      console.log('invalid username')
      res.json({status:'error', error:'Invalid Username'})
    }
})
app.listen(1337, ()=>{
    console.log('Server running in http://localhost:1337')

})