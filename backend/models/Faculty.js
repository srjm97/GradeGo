const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    first_name: {
      type: String,
      required: true,
    },
    middle_name: {
      type: String,
      required: false,
    },
    last_name: {
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
  phone_number: {
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
  staff_type: {
    type: String,
    required:true,
  },
  roles: [
    {
      role_name: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = new mongoose.model("Faculty", FacultySchema);
