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
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  dob: {
    type: Date,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  programme: {
    type: String,
    required: false,
  },
  admissionType: {
    type: String,
    required: false,
  },
  scheme: {
    type: String,
    required: false,
  },
  department: {
    type: String,
    required: false,
  },
  batch: {
    type: Number,
    required: false,
  },
  dateOfAdmission: {
    type: Date,
    required: false,
  },
  currentSemester: {
    type: Number,
    required: false,
  },
  scholarshipDetails:[
    {
      nameOfScholarship:{
        type: String,
        required: false,
      },
      amountReceived:{
        type: Number,
        required: false,
      },
      startDate:{
        type: Date,
        required: false,
      },
      endDate:{
        type: Date,
        required: false,
      },
      scholarshipProvider:{
        type: String,
        required: false,
      },
      remarks:{
        type: String,
        required: false,
      }
    }
  ]
});

module.exports = new mongoose.model('Student', StudentSchema);

/*
db.students.insertOne({_id:'tve20cs002', admno:'2002', name:{firstName:'Raghav', lastName:'Mahendra'}, currentSemester:6, batch:1, department:'Computer Science and Engineering'});
*/
