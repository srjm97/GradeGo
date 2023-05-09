var express = require('express');
var router = express.Router();
const Login = require("../models/Login");
const bcrypt = require('bcrypt')

router.post('/login', async (req, res) => {
    console.log(req.body)
    // check in db if he is a valid user if he is then redirect to dashboard
    const {username, password} = req.body
    console.log(username, password)
    const userpass = await Login.findOne({ username: username }, { password: 1 });
    console.log(userpass)
    if(userpass){
      const passwordMatches = bcrypt.compareSync(password, userpass.password);
      console.log(passwordMatches);

      if (passwordMatches){
        console.log('valid user')
        return res.json({status:'ok', user:true, error:false})
      }
      else {
        console.log('invalid password')
        return res.json({status:'error', user:false, error:true})
      }
    }
    else {
      console.log('invalid username')
      return res.json({status:'error', user:false, error:false})
    }
})

module.exports = router;