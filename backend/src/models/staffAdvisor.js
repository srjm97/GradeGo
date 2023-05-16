const mongoose = require("mongoose");

const StaffAdvisorSchema = new mongoose.Schema({
  // _id represents the faculty ktu id
  _id: {
    type: String,
    required: true,
  },
  semesterHandled: {
    type: Number,
    required: true,
  },
  batchHandled: {
    type: Number,
    required: true,
  },
});

module.exports = new mongoose.model("StaffAdvisor", StaffAdvisorSchema);
