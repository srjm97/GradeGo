var express = require('express');
var router = express.Router();
const TimeTable = require('../models/TimeTable');
const e = require('express');

router.post('/facdashboard', async (req, res) => {
  const { day, periods } = req.body;
  console.log(day, periods);
  // check if the day is already present if present the update else add new 
  const present = await TimeTable.findOne({_id:day});
  console.log(present);
  if (present) {
    for (let i = 0; i < periods.length; ++i) {
      const change = await TimeTable.updateOne({_id:day}, {$set:{[`periods.${i}._id`]:periods[i].index,[`periods.${i}.courseCode`]:periods[i].coursecode,[`periods.${i}.abbreviation`]:periods[i].abbreviation }});
      // console.log(change);
    }
  }
  else{
    const initial = await TimeTable.create({_id:day,periods:[]});
    for (let i = 0; i < periods.length; ++i) {
      const insert = await TimeTable.updateOne({_id:day}, {$push:{periods:{_id:periods[i].index, courseCode:periods[i].coursecode, abbreviation:periods[i].abbreviation}}})
      console.log(insert);
    }
  }

});

module.exports = router;
