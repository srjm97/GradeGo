var express = require('express');
var router = express.Router();
const Login = require('../models/Login');
const Student = require('../models/Student');
const Faculty = require('../models/Faculty');
const bcrypt = require('bcrypt');
const StaffAdvisor = require('../models/StaffAdvisor');
const CodeToName = require('../models/CodeToName');

router.post('/login', async (req, res) => {
  console.log(req.body);
  // check in db if he is a valid user if he is then redirect to dashboard
  const { ktuId, password } = req.body;
  console.log(ktuId, password);
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
        return res.json({ status: 'ok', user: 'student' });
      } else {
        const isFaculty = await Faculty.findOne({_id: ktuId });
        

        const isStaffAdvisor = Faculty.findOne({_id: ktuId, roles: [{ roleName: 'Staff Advisor' }] });
        if (isFaculty) {
          if (isStaffAdvisor) {
            const staffDetails = await StaffAdvisor.findOne({_id: ktuId });
            const courseDetails = await CodeToName.findOne({_id:staffDetails.semester});
            return res.json({ status: 'ok', user: 'faculty', details: staffDetails,course: courseDetails });
          }
          else {
            return res.json({ status: 'ok', user: 'faculty' });
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

module.exports = router;
