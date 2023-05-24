/*
Model Name: Faculty
Usage: To store the faculty details, including their positions which is set as an array so that it can be pushed and popped as necessary. The positions data is then used to represent the roles hold by the faculty. 
Author: Rishin R
*/
const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
  _id: {
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
  department: {
    type: String,
    required: true,
  },
  staffType: {
    type: String,
    required:true,
  },
  roles: [
    {
      roleName: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = new mongoose.model('Faculty', FacultySchema);

/*
db.insert()
*/
