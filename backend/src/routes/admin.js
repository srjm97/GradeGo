var express = require('express');
var router = express.Router();
const Courses = require(__dirname+'/../models/Courses');
const Faculty = require(__dirname+'/../models/Faculty');
const FacultyCourses = require(__dirname+'/../models/FacultyCourses');

router.post('/admin/semesterCourses', async (req, res) => {
  // const semester = 6;
  try {
    const { semester } = req.body;
    const semesterCourses = await Courses.find({ semester: semester }, { _id: 1, courseName: 1 });
    const faculties = await Faculty.find();
    // console.log(faculties);
    // console.log(semesterCourses);
    return res.json({ semesterCourses, faculties });
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/admin/facultyCourseAssignment', async (req, res) => {
  try {
    const input = req.body;
    for (let i = 0; i < input.length; ++i) {
      const { _id, semester, batch, courseCode } = input[i];

      // Check if the faculty course assignment already exists in the database
      const existingAssignment = await FacultyCourses.findOne({
        _id: _id,
        'coursesHandled.semester': semester,
        'coursesHandled.batch': batch,
        'coursesHandled.courseCode': courseCode,
      });

      if (existingAssignment) {
        console.log('Duplicate data found. Skipping:', input[i]);
        continue; // Skip the current iteration and move to the next iteration
      }

      // Add the faculty course assignment to the database if it doesn't already exist
      const addFacultyCourse = await FacultyCourses.updateOne(
        { _id: _id },
        {
          $push: { coursesHandled: { semester: semester, batch: batch, courseCode: courseCode } },
        }
      );
      console.log(addFacultyCourse);
    }
    return res.json({ status: 'ok' });
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});



module.exports = router;