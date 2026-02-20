const express = require("express");
require("dotenv").config();
//console.log(process.env)

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.get("/twitter", (req, res) => {
  res.send("This is the twitter page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
