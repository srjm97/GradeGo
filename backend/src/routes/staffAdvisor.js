var express = require("express");
var router = express.Router();
const TimeTable = require("../models/TimeTable");

router.post("/faculty", async (req, res) => {
  const { _id, periods } = req.body;
});

module.exports = router;
