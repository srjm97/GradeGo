const express = require('express');
const mongoose = require('./connect/mongoose');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 1337;
//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(require('./middlewares/auth'));
//routes
app.use(require('./routes/login'));
app.use(require('./routes/index'));
app.use(require('./routes/staffAdvisor'));
app.use(require('./routes/tutor'));
app.use(require('./routes/student'));
app.use(require('./routes/admin'));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server Started at Port ${PORT}`);
});
