var express = require('express');
const InternalMark = require('../models/InternalMark');
var router = express.Router();

//This route sends attendance details of student for a particular couse
//Author: Harikrishnan V
router.get('/attendance/student/', async(req, res) => {
  //const {ktuId,courseCode} = req.body;
  const ktuId = 'tve20cs000';
  const courseCode = 'CST302';

  const attendanceDetails = await InternalMark.findOne({_id:ktuId,'courseAssessmentTheory.courseCode': courseCode},{'courseAssessmentTheory.courseCode':1,'courseAssessmentTheory.attendance':1});

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
  res.json({totalAttendanceLength,presentCount});

});


module.exports = router;