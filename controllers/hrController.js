const path = require("path");
const edge = require("edge.js");
const { Candidate } = require("../models/canidate");
var formidable = require('formidable');
var fs = require('fs');

exports.dashboard = function(req, res) {
    res.render("dashboard");
  };