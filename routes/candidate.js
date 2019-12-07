var express = require("express");
var router = express.Router();
var candidateController = require("../controllers/candidateController");

router.get("/", candidateController.index);
module.exports = router;
