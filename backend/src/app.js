const express = require('express');
const mongoose = require('./connect/mongoose');

const app = express();
const cors = require('cors');
//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes

app.use(require('./routes/login'));
app.use(require('./routes/users'));
app.use(require('./routes/index'));
app.use(require('./routes/staffAdvisor'));

app.post('/facdashboard',(req,res)=>{
  console.log(req.body);
  const {_id,periods} = req.body;
  console.log(_id,periods);
});


app.listen(1337, () => {
  console.log('Server running in http://localhost:1337');
});
