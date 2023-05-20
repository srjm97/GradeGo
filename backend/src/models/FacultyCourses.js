const mongoose = require('mongoose');

const FacultyCoursesSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  coursesHandled:[{
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

/*
db.facultycourses.insertOne({_id:'ktu-f375', coursesHandled:[{semester:6, batch:2, courseCode:'CST302'}, {semester:6, batch:1, courseCode:'CST302'}]})
*/