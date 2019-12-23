var express = require("express");
var router = express.Router();
var candidateController = require("../controllers/candidateController");

router.get("/", function(req, res) {
  res.send("sss");
});
router.get("/login", candidateController.login);
router.get("/register", candidateController.register);
router.post("/registerUser", candidateController.registerUser);
router.use("candidate", candidate);

module.exports = router;
