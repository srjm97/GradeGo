var express = require("express");
var router = express.Router();
const Login = require("../models/Login");
const Student = require("../models/Student");
const Faculty = require("../models/Faculty");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  console.log(req.body);
  // check in db if he is a valid user if he is then redirect to dashboard
  const { ktu_id, password } = req.body;
  console.log(ktu_id, password);
  const pass = await Login.findOne({ _id: ktu_id });
  console.log(pass);
  if (pass) {
    const passwordMatches = bcrypt.compareSync(password, pass.password);
    console.log(passwordMatches);

    if (passwordMatches) {
      console.log("valid user");
      //check whether the person is a teacher or a student
      // check whether the person is in the student table
      const isStudent = await Student.findOne({ _id: ktu_id });
      console.log(isStudent)
      if (isStudent) {
        return res.json({ status: "ok", user: "student" });
      } else {
        const isFaculty = Faculty.findOne({ id: ktu_id });
        if (isFaculty) {
          return res.json({ status: "ok", user: "faculty" });
        }
      }
    } else {
      console.log("invalid password");
      return res.json({ status: "error", user: 'invalid'});
    }
  } else {
    console.log("invalid username");
    return res.json({ status: "error", user: 'invalid'});
  }
});

module.exports = router;
