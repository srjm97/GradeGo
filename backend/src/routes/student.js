var express = require('express');
const InternalMark = require(__dirname+'/../models/InternalMark');
var router = express.Router();
const StudentCourses = require(__dirname+'/../models/StudentCourses');
const Students = require(__dirname+'/../models/Student');
//This route sends attendance details of student for a particular couse
//Author: Harikrishnan V
router.post('/attendance/student/', async (req, res) => {
  // const ktuId = 'tve20cs000';
  // const courseCode = 'CST302';
  try {
    const { ktuId, courseCode } = req.body;
    console.log(ktuId);
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
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }

});

router.post('/student/studentcourses', async (req, res) => {
  // const _id = 'tve20cs001';
  
  try {
    const { _id } = req.body;
    const student = await Students.findOne({ _id: _id });
    // console.log(student);
    if (student) {
      // console.log(student.currentSemester);
      const courses = await StudentCourses.findOne({ _id: _id, 'coursesEnrolled.semester': student.currentSemester }, { 'coursesEnrolled.semesterCourses': 1 });
      console.log(courses);
      return res.json(courses.coursesEnrolled);
    } else {
      // Handle case when student or semester is missing
      return res.status(404).json({ error: 'Student or semester not found' });
    }
  } catch (error) {
    // Handle any potential errors during database operations
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }

});

module.exports = router;