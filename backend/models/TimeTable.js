const mongoose = require("mongoose");

const TimeTableSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,

  },
  periods: [
    {
      period_no: {
        type: Number,
        required: true,
      },
      course_code: {
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

module.exports = new mongoose.model("TimeTable", TimeTableSchema);
