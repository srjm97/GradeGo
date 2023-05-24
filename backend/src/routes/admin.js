var express = require('express');
var router = express.Router();
const Courses = require('../models/Courses');
const Faculty = require('../models/Faculty');

router.post('/admin/semesterCourses', async (req, res) => {
  //const { semester } = req.body;
  const semester = 6;
  const semesterCourses = await Courses.find({ semester: semester }, { _id: 1, courseName: 1 });
  const faculties = await Faculty.find();
  console.log(faculties);
  console.log(semesterCourses);
  return res.json({semesterCourses,faculties});
});

module.exports = router;