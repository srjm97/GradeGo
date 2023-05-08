var express = require("express");
require('dotenv').config({ path: './.env' });
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require('cors');
var mongo = require('./connect/mongoose')
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
//listener 
app.listen(5000, () =>
  console.log("server listening at http://localhost:5000/")
);
module.exports = app;
