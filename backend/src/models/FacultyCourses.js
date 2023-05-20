const mongoose = require('mongoose');

const FacultyCoursesSchema = new mongoose.schema({
  _id: {
    type: String,
    required: true,
  },
  CoursesHandled:[{
    semester:{
      type:Number,
      required: true,
    },
    batch:{
      type:Number,
      required:true,
    },
    courseCode:{
      type:String,
      required:true,
    }
  }]
});

module.exports = new mongoose.model('facultyCourse', FacultyCoursesSchema);