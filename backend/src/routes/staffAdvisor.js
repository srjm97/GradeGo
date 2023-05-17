var express = require('express');
var router = express.Router();
const TimeTable = require('../models/TimeTable');
const CodeToName = require('../models/CodeToName');

// on getting the get request return the time table given the semester and batch
router.get('/facdashboard/TimeTable', async (req, res) => {
  const { semester, batch } = req.body;
  // const semester = 6;
  // const batch = 1;
  const display = await TimeTable.findOne({ _id: semester, batch: batch });
  console.log(display);
  return res.json(display);
});

router.get('/facdashboard/data', async (req, res) => {
  const {semester} = req.body;
  // const semester = 6;
  const courseDetails = await CodeToName.findOne({_id:semester});
  console.log(courseDetails);
  return res.json(courseDetails);
});

// to add a new time table or update existing
router.post('/facdashboard/TimeTable', async (req, res) => {
  // const { semester, batch, days } = req.body;
  const semester = 4;
  const batch = 2;
  const days = [
    {
      _id: 'Monday',
      periods: [{
        _id: 1,
        courseCode: '',
        abbreviation: 'CCW'
      },
      {
        _id: 2,
        courseCode: '',
        abbreviation: 'AAD'
      },
      {
        _id: 3,
        courseCode: '',
        abbreviation: 'CD'
      },
      {
        _id: 4,
        courseCode: '',
        abbreviation: 'PP'
      },
      {
        _id: 5,
        courseCode: '',
        abbreviation: 'CGIP'
      },
      {
        _id: 6,
        courseCode: '',
        abbreviation: 'Minor'
      },
      {
        _id: 7,
        courseCode: '',
        abbreviation: 'Minor'
      }]
    }];

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
              //days is passed as _id (days._id)
              [`days.${i}._id`]: days[i]._id,
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
    console.log(addNewTimeTable);
  }
});

module.exports = router;
