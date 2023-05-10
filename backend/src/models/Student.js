const mongoose = require("mongoose");

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
  // academic details
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
  programme: {
    type: String,
    required: true,
  },
  admission_type: {
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
  date_of_admission: {
    type: Date,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
});

module.exports = new mongoose.model("Student", StudentSchema);
