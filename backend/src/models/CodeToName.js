/*
Model Name:  CodeToName
Usage: To store the courses corresponding to each semester, contains the coursecode and CourseName to identify each course, against each semester. Here course is input as an array so that each course can be pushed into or popped fromt the collection against the corresponding semester. Semester is considered as the primary key.
Author: Harikrishnan V
*/
const mongoose = require('mongoose');

const CodeToNameSchema = new mongoose.Schema({
  //_id is semester number 
  _id: {
    type: Number,
    required: true,
  },
  courses: [
    {
      courseCode: {
        type: String,
        required: true,
      },
      courseName: {
        type: String,
        required: true,
      },
    },

  ]

});

module.exports = new mongoose.model('CodeToName', CodeToNameSchema);
