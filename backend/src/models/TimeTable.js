const mongoose = require('mongoose');

const TimeTableSchema = new mongoose.Schema({
  //day is the _id in the db
  _id: {
    type: String,
    required: true,
  },
  periods: [
    {
      _id: {
        type: Number,
        required: false,
      },
      courseCode: {
        type: String,
        required: false,
      },
      abbreviation: {
        type: String,
        required: false,
      },
    },
  ],
});

module.exports = new mongoose.model('TimeTable', TimeTableSchema);
