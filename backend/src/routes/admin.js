var express = require('express');
var router = express.Router();
const Courses = require('../models/courses');

router.post('admin/semesterCourses', async (req, res) => {
  const { semester } = req.body;
  // const semester = 6;
  const semesterCourses = await Courses.find({ semester: semester }, { _id: 1, _courseName: 1 });

  return res.json(semesterCourses);
});

module.exports = router;