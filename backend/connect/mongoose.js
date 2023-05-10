require('dotenv').config({ path: '../.env' })
const mongoose = require('mongoose')
const db = 'mongodb+srv://StudentTracker:EBJempYE3pbx4xSQ@cluster0.i8kgzaf.mongodb.net/node_system'

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, family:4 })
  .then(result => console.log('connected to db'))
  .catch(err => console.log(err))