var express = require("express");
var router = express.Router();
var candidateController = require("../controllers/candidateController");
var hrController = require("../controllers/hrController");

router.get("/", function(req, res) {
  res.send("sss");
});
router.get("/login", candidateController.login);
router.get("/dashboard", hrController.dashboard);

router.get("/register", candidateController.register);
router.post("/registerUser", candidateController.registerUser);
router.post("/loginUser", candidateController.loginUser);

// router.use("candidate", candidate);

module.exports = router;
