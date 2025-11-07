const express = require("express");

const app = express();

app.get(
  "/user",
  (req, res, next) => {
    next();
  },
  (req, res, next) => {
    res.send("2nd Route Handler");
  }
);

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777");
});
