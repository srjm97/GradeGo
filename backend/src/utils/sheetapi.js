const fs = require("fs");
const { parse } = require("csv-parse");
const mongoose = require("mongoose");
const Login = require("../models/Login");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const db =
  "mongodb+srv://StudentTracker:EBJempYE3pbx4xSQ@cluster0.i8kgzaf.mongodb.net/node_system";
mongoose.connect(db, {
  useNewurlParser: true,
  useunifiedTopology: true,
  family: 4,
});

async function csvData() {
  const csvFilePath = __dirname + "/../public/sample.csv"; // use __dirname to get the absolute path
  let l = [];
  fs.createReadStream(csvFilePath)
    .on("error", (err) => {
      console.error(err);
    })
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
      l.push(row);
    })
    .on("error", function (error) {
      console.log(error.message);
    })
    .on("end", async function () {
      for (i = 0; i < l.length; ++i) {
        const ktu_id = l[i][0];
        const pass = l[i][1];
        // encrypt the password before pushing it into db
        const password = bcrypt.hashSync(pass, saltRounds);
        const us = await Login.findOne({ _id: ktu_id});
        console.log(us)
        if (us) {
          console.log("user already present");
        } else {
          // const newLogin = new Login({ ktu_id, password });
          // newLogin
          //   .save()
          //   .then(() => {
          //     console.log("successfully added user");
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //   });
          const out = await Login.create({_id:ktu_id, password:password});
        }
      }
      console.log("finished");
    });
}

//call function here for testing only
csvData()

module.exports = { csvData: csvData };