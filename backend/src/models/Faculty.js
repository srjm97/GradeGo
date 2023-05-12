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
