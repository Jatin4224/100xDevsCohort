const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    //Router handler
    // res.send("Route Handler 1");
    console.log("Handling the route user!!");
    //res.send("Response!!");
    next();
  },
  (req, res) => {
    //route handler 2
    console.log("Handling the route user 2!!");
    res.send("2nd Response!!");
  }
);

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777");
});
