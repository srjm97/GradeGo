/*
Model Name:  Student
Usage: to store all the student details, including personal, login and scholarship details.
Author: Rishin R
*/
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  //   student_ktu_id is the _id in db
  //   basic details
  _id: {
    type: String,
    required: true,
  },
  admno: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  // academic details
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  programme: {
    type: String,
    required: true,
  },
  admissionType: {
    type: String,
    required: true,
  },
  scheme: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  batch: {
    type: Number,
    required: true,
  },
  dateOfAdmission: {
    type: Date,
    required: true,
  },
  currentSemester: {
    type: Number,
    required: true,
  },
  scholarshipDetails:[
    {
      nameOfScholarship:{
        type: String,
        required: true,
      },
      amountReceived:{
        type: Number,
        required: true,
      },
      startDate:{
        type: Date,
        required: true,
      },
      endDate:{
        type: Date,
        required: true,
      },
      scholarshipProvider:{
        type: String,
        required: true,
      },
      remarks:{
        type: String,
        required: false,
      }
    }
  ]
});

module.exports = new mongoose.model('Student', StudentSchema);
