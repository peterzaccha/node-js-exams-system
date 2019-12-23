
const path = require('path')
const edge = require('edge.js')
exports.index = function(req, res) {
  res.render("index", { name: "John" });
};

exports.login = function(req, res) {
  res.send(edge.render('login'));
};

exports.register = function(req, res) {
  res.send(edge.render('register'));
};