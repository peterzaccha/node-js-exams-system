var express = require("express");
var router = express.Router();
var candidateController = require("../controllers/candidateController");

router.get("/login", candidateController.login);
module.exports = router;
