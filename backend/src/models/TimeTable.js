/*
Model Name: TimeTable
Usage: Stores the timetable details of each semester and batch, this shall be only performed by the staff advisor. Here the days is set as an array so the time table set for each day can be pushed and popped as necessary.
Author: Rishin R
*/
const mongoose = require('mongoose');

const TimeTableSchema = new mongoose.Schema({
  //semester is the _id in the db
  _id: {
    semester:{
      type:Number,
      required:true
    },
    batch:{
      type:Number,
      required:true,
    }
  },
  days: [{
    _id: {
      type: String,
      required: true,
    },
    periods: [
      {
        // here _id represents the period number
        _id: {
          type: Number,
          required: false,
        },
        duration:{
          startTime:{
            type:Date,
            required:false,
          },
          endTime:{
            type:Date,
            required:false,
          }
        },
        courseAbbreviation: {
          type: String,
          required: false,
        },
      },
    ],
  }],
});

module.exports = new mongoose.model('TimeTable', TimeTableSchema);

/*
db.timetables.insertOne({
  _id:6,
  batch:1, 
  days: [
    {day:'Monday',
      periods:[{
        _id:1,
        courseCode:'',
        abbreviation:'CCW'
      },
      {
        _id:2,
        courseCode:'',
        abbreviation:'AAD'
      },
      {
        _id:3,
        courseCode:'',
        abbreviation:'CD'
      },
      {
        _id:4,
        courseCode:'',
        abbreviation:'PP'
      },
      {
        _id:5,
        courseCode:'',
        abbreviation:'CGIP'
      },
      {
        _id:6,
        courseCode:'',
        abbreviation:'Minor'
      },
      {
        _id:7,
        courseCode:'',
        abbreviation:'Minor'
      }]
    },

{day:'Tuesday',
      periods:[{
        _id:1,
        courseCode:'',
        abbreviation:'AAD'
      },
      {
        _id:2,
        courseCode:'',
        abbreviation:'IEF'
      },
      {
        _id:3,
        courseCode:'',
        abbreviation:'CGIP'
      },
      {
        _id:4,
        courseCode:'',
        abbreviation:'CD'
      },
      {
        _id:5,
        courseCode:'',
        abbreviation:'PP'
      },
      {
        _id:6,
        courseCode:'',
        abbreviation:'Honor'
      },
      {
        _id:7,
        courseCode:'',
        abbreviation:'Honor'
      }]
    },

{day:'Wednesday',
      periods:[{
        _id:1,
        courseCode:'',
        abbreviation:'Network Lab/Mini project'
      },
      {
        _id:2,
        courseCode:'',
        abbreviation:'Network Lab/Mini Project'
      },
      {
        _id:3,
        courseCode:'',
        abbreviation:'Network Lab/Mini project'
      },
      {
        _id:4,
        courseCode:'',
        abbreviation:'AAD'
      },
      {
        _id:5,
        courseCode:'',
        abbreviation:'CGIP'
      },
      {
        _id:6,
        courseCode:'',
        abbreviation:'Free hour'
      },
      {
        _id:7,
        courseCode:'',
        abbreviation:'Honour'
      }]
    },

{day:'Thursday',
      periods:[{
        _id:1,
        courseCode:'',
        abbreviation:'PP'
      },
      {
        _id:2,
        courseCode:'',
        abbreviation:'IEF'
      },
      {
        _id:3,
        courseCode:'',
        abbreviation:'CGIP'
      },
      {
        _id:4,
        courseCode:'',
        abbreviation:'AAD'
      },
      {
        _id:5,
        courseCode:'',
        abbreviation:'CD'
      },
      {
        _id:6,
        courseCode:'',
        abbreviation:'Minor'
      },
      {
        _id:7,
        courseCode:'',
        abbreviation:'Minor'
      }]
    },

{day:'Friday',
      periods:[{
        _id:1,
        courseCode:'',
        abbreviation:'Network Lab/Mini Project'
      },
      {
        _id:2,
        courseCode:'',
        abbreviation:'Network Lab/Mini Project'
      },
      {
        _id:3,
        courseCode:'',
        abbreviation:'Network Lab/Mini Project'
      },
      {
        _id:4,
        courseCode:'',
        abbreviation:'Free hour'
      },
      {
        _id:5,
        courseCode:'',
        abbreviation:'IEF'
      },
      {
        _id:6,
        courseCode:'',
        abbreviation:'CD'
      },
      {
        _id:7,
        courseCode:'',
        abbreviation:'Honor'
      }]
    }
  ]

})
*/
