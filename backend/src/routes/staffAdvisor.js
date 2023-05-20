var express = require('express');
var router = express.Router();
const TimeTable = require('../models/TimeTable');
// const CodeToName = require('../models/CodeToName');
const Courses = require('../models/Courses');
const mongoose = require('mongoose');

// returns the time table on request from the staffadvisor dashboard for display
router.get('/facdashboard/TimeTable', async (req, res) => {
  const { semester, batch } = req.body;
  // const semester = 6;
  // const batch = 1;
  const display = await TimeTable.findOne({ _id: { semester, batch: batch } });
  // console.log(display);
  return res.json(display);
});

// send the courses against a particular semester to the staffadvisor dashboard
router.get('/facdashboard/data', async (req, res) => {
  const { semester } = req.body;
  // const semester = 6;
  const courses = await Courses.find({ semester: semester });
  // console.log(courses);
  return res.json(courses);
});
function periodToDuration(period) {
  let startTime = new Date();
  let endTime = new Date();
  if (period === 1) {
    startTime.setHours(9);
    startTime.setMinutes(0);
    endTime.setHours(10);
    endTime.setHours(0);
    return { startTime, endTime };
  }
  else if (period === 2) {
    startTime.setHours(10);
    startTime.setMinutes(0);
    endTime.setHours(11);
    endTime.setHours(0);
    return { startTime, endTime };
  }
  else if (period === 3) {
    startTime.setHours(11);
    startTime.setMinutes(0);
    endTime.setHours(12);
    endTime.setHours(0);
    return { startTime, endTime };
  }
  else if (period === 4) {
    startTime.setHours(13);
    startTime.setMinutes(0);
    endTime.setHours(14);
    endTime.setHours(0);
    return { startTime, endTime };
  }
  else if (period === 5) {
    startTime.setHours(14);
    startTime.setMinutes(0);
    endTime.setHours(15);
    endTime.setHours(0);
    return (startTime, endTime);
  }
  else if (period === 6) {
    startTime.setHours(15);
    startTime.setMinutes(0);
    endTime.setHours(16);
    endTime.setHours(0);
    return { startTime, endTime };
  }
  else if (period === 7) {
    startTime.setHours(16);
    startTime.setMinutes(0);
    endTime.setHours(17);
    endTime.setHours(0);
    return { startTime, endTime };
  }
}
// to add a new time table or update existing
router.post('/facdashboard/TimeTable', async (req, res) => {
  // const { semester, batch, days } = req.body;
  const semester = 5;
  const batch = 5;
  const days = [
    {
      day: 'Monday',
      periods: [{
        _id: 1,
        abbreviation: 'CCW'
      },
      {
        _id: 2,
        abbreviation: 'AAD'
      },
      {
        _id: 3,
        abbreviation: 'CD'
      },
      {
        _id: 4,
        abbreviation: 'PP'
      },
      {
        _id: 5,
        abbreviation: 'CGIP'
      },
      {
        _id: 6,
        abbreviation: 'Minor'
      },
      {
        _id: 7,
        abbreviation: 'Minor'
      }]
    },

    {
      day: 'Tuesday',
      periods: [{
        _id: 1,
        abbreviation: 'AAD'
      },
      {
        _id: 2,
        abbreviation: 'IEF'
      },
      {
        _id: 3,
        abbreviation: 'CGIP'
      },
      {
        _id: 4,
        abbreviation: 'CD'
      },
      {
        _id: 5,
        abbreviation: 'PP'
      },
      {
        _id: 6,
        abbreviation: 'Honor'
      },
      {
        _id: 7,
        abbreviation: 'Honor'
      }]
    },

    {
      day: 'Wednesday',
      periods: [{
        _id: 1,
        abbreviation: 'Network Lab/Mini project'
      },
      {
        _id: 2,
        abbreviation: 'Network Lab/Mini Project'
      },
      {
        _id: 3,
        abbreviation: 'Network Lab/Mini project'
      },
      {
        _id: 4,
        abbreviation: 'AAD'
      },
      {
        _id: 5,
        abbreviation: 'CGIP'
      },
      {
        _id: 6,
        abbreviation: 'Free hour'
      },
      {
        _id: 7,
        abbreviation: 'Honour'
      }]
    },

    {
      day: 'Thursday',
      periods: [{
        _id: 1,
        abbreviation: 'PP'
      },
      {
        _id: 2,
        abbreviation: 'IEF'
      },
      {
        _id: 3,
        abbreviation: 'CGIP'
      },
      {
        _id: 4,
        abbreviation: 'AAD'
      },
      {
        _id: 5,
        abbreviation: 'CD'
      },
      {
        _id: 6,
        abbreviation: 'Minor'
      },
      {
        _id: 7,
        abbreviation: 'Minor'
      }]
    },

    {
      day: 'Friday',
      periods: [{
        _id: 1,
        abbreviation: 'Network Lab/Mini Project'
      },
      {
        _id: 2,
        abbreviation: 'Network Lab/Mini Project'
      },
      {
        _id: 3,
        abbreviation: 'Network Lab/Mini Project'
      },
      {
        _id: 4,
        abbreviation: 'Free hour'
      },
      {
        _id: 5,
        abbreviation: 'IEF'
      },
      {
        _id: 6,
        abbreviation: 'CD'
      },
      {
        _id: 7,
        abbreviation: 'Honor'
      }]
    }
  ];
  // console.log(semester, batch, days);
  // check if the day is already present if present the update else add new
  const present = await TimeTable.findOne({ _id: { semester: semester, batch: batch } });
  console.log(present);
  if (present) {
    for (let i = 0; i < days.length; ++i) {
      for (let j = 0; j < days[i].periods.length; ++j) {
        const { startTime, endTime } = periodToDuration(j + 1);
        const change = await TimeTable.updateOne(
          { _id: { semester, batch: batch } },
          {
            $set: {
              //days is passed as _id (days._id)
              [`days.${i}._id`]: days[i]._id,
              [`days.${i}.periods.${j}._id`]: days[i].periods[j].index,
              [`days.${i}.periods.${j}.duration.startTime`]: startTime,
              [`days.${i}.periods.${j}.duration.endTime`]: endTime,
              [`days.${i}.periods.${j}.abbreviation`]:
                days[i].periods[j].abbreviation,
            },
          }
        );
      }
    }
  } else {
    const timetable = new TimeTable({
      _id: { semester, batch },
      days: days.map(({ day, periods }) => ({
        _id: day.toLowerCase(), // Assuming day should be used as _id
        periods: periods.map(({ _id, abbreviation }) => ({
          _id,
          duration: {},
          courseAbbreviation: abbreviation
        }))
      }))
    });

    timetable.save()
      .then(() => {
        console.log('TimeTable data inserted successfully');
        mongoose.disconnect();
      })
      .catch(error => {
        console.error('Error inserting TimeTable data:', error);
        mongoose.disconnect();
      });
  }
});

module.exports = router;
