const path = require("path");
const edge = require("edge.js");
const Candidate = require("../models/canidate");
exports.index = function(req, res) {
  res.render("index", { name: "John" });
};

exports.login = function(req, res) {
  res.send(edge.render("login"));
};

exports.register = function(req, res) {
  res.send(edge.render("register"));
};

exports.registerUser = function(req, res) {
  console.log(req.body);
  var candidateObj = Candidate(req.body);
  console.log(candidateObj.user_name);
  //res.send(edge.render('register'));
};
