/*
model Name: Courses
Usage: To store the entire details of all courses, courseOutcomes are created as an array so they are configurable at any point of time. Previous year question papers can be added into the array of question papers against the course.  
Author: Harikrishnan V
*/
const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  courseAbbreviation: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  lecture: {
    type: Number,
    required: false,
  },
  tutorial: {
    type: Number,
    required: false,
  },
  practical: {
    type: Number,
    required: false,
  },
  credits: {
    type: Number,
    required: false,
  },
  yearOfIntroduction: {
    type: Date,
    required: false,
  },
  courseDescription: {
    type: String,
    required: false,
  },
  department: {
    type: String,
    required: false,
  },
  semester: {
    type: Number,
    required: false,
  },
  courseOutcomes: [
    {
      coNo: {
        type: Number,
        required: false,
      },
      coDescription: {
        type: String,
        required: false,
      }
    },
  ],
  questionPapers: [
    {
      nameOfPaper: {
        type: String,
        required: false,
      },
      DateOfExamination: {
        type: Date,
        required: false,
      },
      questionPaper: {
        type: String,
        required: false,
      },
    },
  ],
  syllabus: {
    type: String,
    required: false,
  },
});

module.exports = new mongoose.model('Course', CourseSchema);

/*
db.courses.insertMany(
[
{
_id:'CST302', courseName:'Compiler Design', courseAbbreviation:'CD', credits: 4, semester:6
}, 
{
_id:'CST308', courseName:'Comprehensive Course Work', courseAbbreviation:'CCW', credits:4, semester:6
},
{
_id:'CST306', courseName:'Algorithm Analysis and Design', courseAbbreviation:'AAD', credits:4, semester:6
},
{
_id:'CST304', courseName:'Computer Graphics and Image Processing', courseAbbreviation:'CGIP', credits:4, semester:6
},
{
_id:'HUT300', courseName:'Industrial Economics and Foreign Trade', courseAbbreviation:'IEFT', credits:3, semester:6
},
{
_id:'CST322', courseName:'Data Analytics', courseAbbreviation:'DA', credits:3, semester:6
},
{
_id:'CST362', courseName:'Programming In Python', courseAbbreviation:'PP', credits:3, semester:6
},
])

db.courses.insertMany([{

  _id:''

}])
*/
