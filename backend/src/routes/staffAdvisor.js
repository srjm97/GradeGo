var express = require('express');
var router = express.Router();
const TimeTable = require('../models/TimeTable');
const e = require('express');

//display time table

router.get('/facdashboard/TimeTable', async(req, res)=>{
  const {semester, batch} = req.body
});




// to add a new time table or update existing
router.post('/facdashboard/TimeTable', async (req, res) => {
  const { semester, batch, days} = req.body;
  console.log(semester, batch, days);
  // check if the day is already present if present the update else add new 
  const present = await TimeTable.findOne({_id:semester, batch:batch});
  console.log(present);
  // if (present) {
  //   for (let i = 0; i < periods.length; ++i) {
  //     const change = await TimeTable.updateOne({_id:semester, batch:batch}, {$set:{[`periods.${i}._id`]:periods[i].index,[`periods.${i}.courseCode`]:periods[i].coursecode,[`periods.${i}.abbreviation`]:periods[i].abbreviation }});
  //     // console.log(change);
  //   }
  // }
  // else{
  //   const initial = await TimeTable.create({_id:semester,batch:batch,periods:[]});
  //   for (let i = 0; i < periods.length; ++i) {
  //     const insert = await TimeTable.updateOne({_id:semester, batch:batch}, {$push:{periods:{_id:periods[i].index, courseCode:periods[i].coursecode, abbreviation:periods[i].abbreviation}}})
  //     console.log(insert);
  //   }
  // }
  if (present) {
    for (let i = 0; i < days.length; ++i) {
      for (let j = 0; j < days[i].periods.length; ++j) {
        const change = await TimeTable.updateOne({_id:semester, batch:batch}, {$set:{[`days.${i}.day`]:days[i].day,[`days.${i}.periods.${j}._id`]:days[i].periods[j].index,[`days.${i}.periods.${j}.courseCode`]:days[i].periods[j].coursecode,[`days.${i}.periods.${j}.abbreviation`]:days[i].periods[j].abbreviation }});
      }
    }
  }
  else {
    const initial = await TimeTable.create({_id:semester,batch:batch,days:days});
    for (let i = 0; i < days.length; ++i) {
      for (let j = 0; j < days[i].periods.length; ++j) {
        const insert = await TimeTable.updateOne({_id:semester, batch:batch}, {$push:{days:days}});
      }
    }
    console.log(insert);
  }
});

module.exports = router;
