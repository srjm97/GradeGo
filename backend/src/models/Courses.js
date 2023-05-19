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
  category: {
    type: String,
    required: true,
  },
  lecture: {
    type: Number,
    required: true,
  },
  tutorial: {
    type: Number,
    required: true,
  },
  practical: {
    type: Number,
    required: true,
  },
  credits: {
    type: Number,
    required: true,
  },
  yearOfIntroduction: {
    type: Date,
    required: true,
  },
  courseDescription: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  courseOutcomes: [
    {
      coNo: {
        type: Number,
        required: true,
      },
      coDescription:{
        type: String,
        required: true,
      }
    },
  ],
  questionPapers: [
    {
      nameOfPaper: {
        type: String,
        required: true,
      },
      DateOfExamination:{
        type: Date,
        required: true,
      },
      questionPaper: {
        type: String,
        required: true,
      },
    },
  ],
  syllabus: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model('Course', CourseSchema);
