var express = require("express");
var router = express.Router();
var candidate = require("./candidate");

router.get("/", function(req, res) {
  res.send("sss");
});

router.use("candidate", candidate);

module.exports = router;
