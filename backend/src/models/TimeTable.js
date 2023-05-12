const mongoose = require('mongoose');

const TimeTableSchema = new mongoose.Schema({
  //day is the _id in the db
  _id: {
    type: String,
    required: true,
  },
  periods: [
    {
      periodNo: {
        type: Number,
        required: true,
      },
      courseCode: {
        type: String,
        required: true,
      },
      abbreviation: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = new mongoose.model('TimeTable', TimeTableSchema);
