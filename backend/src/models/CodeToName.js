const mongoose = require('mongoose');

const CodeToNameSchema = new mongoose.Schema({
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
