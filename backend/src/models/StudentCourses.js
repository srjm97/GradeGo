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
