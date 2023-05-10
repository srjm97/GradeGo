const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("Login", LoginSchema);
