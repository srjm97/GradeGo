/*
Model Name:  StudentCourses
Usage: The courses taken by a student in a particular semester is mapped in this model. here courses enrolled is set as an array so that values can be pushed into it.
Author: Harikrishnan V
*/
const mongoose = require('mongoose');

const studentCourseSchema = new mongoose.Schema({
  // here _id represents the student ktu id
  _id: {
    type: String,
    required: true,
  },
  coursesEnrolled:[
    {
      semester:{
        type: String,
        required:true,
      },
      semesterCourses:[{
        courseCode:{
          type:String, 
          required:false
        }
      }]
    }
  ]
});

module.exports = new mongoose.model('studentCourse', studentCourseSchema);
/*
db.studentCourses.insertOne({_id:'tve20cs000', coursesEnrolled:{semester:6, semesterCourses:[{courseCode:'CST301'}, {courseCode:'CST302'}, {courseCode:'CST303'}, {courseCode:'CST304'}]}})
*/