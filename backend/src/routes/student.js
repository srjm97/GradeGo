var express = require('express');
const InternalMark = require('../models/InternalMark');
var router = express.Router();
const StudentCourses = require('../models/StudentCourses');
const Students = require('../models/Student');
//This route sends attendance details of student for a particular couse
//Author: Harikrishnan V
router.get('/attendance/student/', async (req, res) => {
  //const {ktuId,courseCode} = req.body;
  const ktuId = 'tve20cs000';
  const courseCode = 'CST302';

  const attendanceDetails = await InternalMark.findOne({ _id: ktuId, 'courseAssessmentTheory.courseCode': courseCode }, { 'courseAssessmentTheory.courseCode': 1, 'courseAssessmentTheory.attendance': 1 });

  let presentCount = 0;
  attendanceDetails.courseAssessmentTheory.forEach(course => {
    course.attendance.forEach(entry => {
      if (entry.isPresent === true) {
        presentCount++;
      }
    });
  });

  //console.log(presentCount);
  //console.log(attendanceDetails);
  const totalAttendanceLength = attendanceDetails.courseAssessmentTheory[0].attendance.length;
  //console.log(attendanceLength);
  res.json({ totalAttendanceLength, presentCount });

});

router.post('/student/studentcourses', async (req, res) => {
  // const { _id } = req.body;
  const _id = 'tve20cs001';
  const sem = await Students.findOne({ _id: _id });
  console.log(sem.currentSemester);
  const courses = await StudentCourses.find({ _id: _id, coursesEnrolled:{semester: sem.currentSemester} });
  console.log(courses);
  return res.json(courses.semesterCourses);
});

module.exports = router;