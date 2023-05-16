var express = require("express");
var router = express.Router();
const TimeTable = require("../models/TimeTable");
const e = require("express");

// on getting the get request return the time table given the semester and batch
router.get("/facdashboard/TimeTable", async (req, res) => {
  const { semester, batch } = req.body;
  const display = await TimeTable.findOne({ _id: semester, batch: batch });
  console.log(display);
  return res.json(display);
});

router.get("/facdashboard/Timetable", async (req, res) => {
  const { semester, batch } = req.body;
  const timetable = await TimeTable.findOne({ _id: semester, batch: batch });
  if (timetable) {
    // return the json of the contents in the document
    console.log(timetable);
  }
});

// to add a new time table or update existing
router.post("/facdashboard/TimeTable", async (req, res) => {
  const { semester, batch, days } = req.body;
  console.log(semester, batch, days);
  // check if the day is already present if present the update else add new
  const present = await TimeTable.findOne({ _id: semester, batch: batch });
  console.log(present);
  if (present) {
    for (let i = 0; i < days.length; ++i) {
      for (let j = 0; j < days[i].periods.length; ++j) {
        const change = await TimeTable.updateOne(
          { _id: semester, batch: batch },
          {
            $set: {
              [`days.${i}.day`]: days[i].day,
              [`days.${i}.periods.${j}._id`]: days[i].periods[j].index,
              [`days.${i}.periods.${j}.courseCode`]:
                days[i].periods[j].coursecode,
              [`days.${i}.periods.${j}.abbreviation`]:
                days[i].periods[j].abbreviation,
            },
          }
        );
      }
    }
  } else {
    const addNewTimeTable = await TimeTable.create({
      _id: semester,
      batch: batch,
      days: days,
    });
    console.log(addnewTimeTable);
  }
});

module.exports = router;
