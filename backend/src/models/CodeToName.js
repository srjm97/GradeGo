const mongoose = require('mongoose');

const CodeToNameSchema = new mongoose.Schema({
  //_id is semester number 
  _id: {
    type: Number,
    required: true,
  },
  courseCode: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model('CodeToName', CodeToNameSchema);
