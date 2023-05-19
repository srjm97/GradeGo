/*
Model Name:  StudentCourses
Usage: The courses taken by a student in a particular semester is mapped in this model. here courses enrolled is set as an array so that values can be pushed into it.
Author: Harikrishnan V
*/
const mongoose = require("mongoose");

const studentCourseSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  coursesEnrolled: [
    {
      semester: {
        type: String,
        required: true,
      },
      courseCode:{
        type: String,
        required: true,
      }
    },
  ],
});

module.exports = new mongoose.model("studentCourse", studentCourseSchema);
