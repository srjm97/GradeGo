var express = require('express');
var router = express.Router();
const Courses = require('../models/Courses');
const Faculty = require('../models/Faculty');
const FacultyCourses = require('../models/FacultyCourses');

router.post('/admin/semesterCourses', async (req, res) => {
  const { semester } = req.body;
  // const semester = 6;
  const semesterCourses = await Courses.find({ semester: semester }, { _id: 1, courseName: 1 });
  const faculties = await Faculty.find();
  // console.log(faculties);
  // console.log(semesterCourses);
  return res.json({semesterCourses,faculties});
});

router.post('/admin/facultyCourseAssignment', async (req, res) => {
  // const {_id, semester, batch, courseCode} = req.body;
  const _id = 'ktu-f375';
  const semester = 6;
  const batch = 1;
  const courseCode = 'CST302';
  const addFacultyCourse = await FacultyCourses.updateOne({_id:_id}, {$push:{coursesHandled:{semester:semester, batch:batch, courseCode:courseCode}}});
  console.log(addFacultyCourse);

});

module.exports = router;