require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes");

app.use(express.static("public"));

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(router);

app.get("/", function(req, res) {
  res.render("index", { name: "John" });
});

app.listen(3000, () => {
  console.log("Starting...");
});
