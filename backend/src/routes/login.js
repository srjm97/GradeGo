var express = require('express');
require('dotenv').config();
var router = express.Router();
const Login = require('../models/Login');
const Student = require('../models/Student');
const Faculty = require('../models/Faculty');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const StaffAdvisor = require('../models/StaffAdvisor');
// const CodeToName = require('../models/CodeToName');
const {authenticateToken} = require('../middlewares/auth');
const Courses = require('../models/Courses');

router.post('/login', async (req, res) => {
  console.log(req.body);
  // check in db if he is a valid user if he is then redirect to dashboard
  const { ktuId, password } = req.body;
  console.log(ktuId, password);
  //jwt implementation
  const user = {name:ktuId};
  const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
  //res.json({accessToken:accessToken});

  const pass = await Login.findOne({ _id: ktuId }, { password: 1 });
  console.log(pass);
  if (pass) {
    const passwordMatches = bcrypt.compareSync(password, pass.password);
    console.log(passwordMatches);

    if (passwordMatches) {
      console.log('valid user');
      //check whether the person is a teacher or a student
      // check whether the person is in the student table
      const isStudent = await Student.findOne({ _id: ktuId });
      console.log(isStudent);
      if (isStudent) {
        return res.json({ status: 'ok', user: 'student' ,accessToken:accessToken});
      } else {
        const isFaculty = await Faculty.findOne({_id: ktuId });
        

        const isStaffAdvisor = Faculty.findOne({_id: ktuId, roles: [{ roleName: 'Staff Advisor' }] });
        if (isFaculty) {
          if (isStaffAdvisor) {
            const staffDetails = await StaffAdvisor.findOne({_id: ktuId });
            //console.log(staffDetails);
            // const courseDetails = await CodeToName.findOne({_id:staffDetails.semesterHandled});
            const courseDetails = await Courses.find({semester:staffDetails.semesterHandled});
            //console.log(courseDetails);
            return res.json({ status: 'ok', user: 'faculty', details: staffDetails,course: courseDetails,accessToken:accessToken });
          }
          else {
            return res.json({ status: 'ok', user: 'faculty',accessToken:accessToken });
          }
        }
        else{
          console.log('error');
        }
      }
    } else {
      console.log('invalid password');
      return res.json({ status: 'error', user: 'invalid' });
    }
  } else {
    console.log('invalid username');
    return res.json({ status: 'error', user: 'invalid' });
  }
});

router.get('/facdashboard',authenticateToken,async(req,res) =>{
  const logins = await Login.find();
  console.log(logins);
  res.json(logins.filter(login=>login._id === req.user.name));
  
});

module.exports = router;
