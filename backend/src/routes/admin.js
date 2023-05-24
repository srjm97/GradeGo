var express = require('express');
var router = express.Router();
const Courses = require('../models/Courses');

router.post('/admin/semesterCourses', async (req, res) => {
  const { semester } = req.body;
  // const semester = 6;
  const semesterCourses = await Courses.find({ semester: semester }, { _id: 1, courseName: 1 });
  console.log(semesterCourses);
  return res.json(semesterCourses);
});

module.exports = router;