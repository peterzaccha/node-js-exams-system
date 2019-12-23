require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes");
const path = require('path')
const edge = require('edge.js')
const bodyParser=require("body-parser")

app.use(express.static("public"));
edge.registerViews(path.join(__dirname, './views'))

//app.set("views", __dirname + "/views");
//app.set("view engine", "edge");
//app.engine("edge", edge);
app.use(bodyParser())
app.use(router);

app.listen(3000, () => {
  console.log("Starting...");
});
