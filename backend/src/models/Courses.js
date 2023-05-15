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
