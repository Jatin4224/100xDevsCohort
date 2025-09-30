const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let users = [{ id: 1, username: "hiteshchoudhary" }];

// GET all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// POST new user
app.post("/api/users", (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: "Username required" });
  const id = users.length + 1;
  const newUser = { id, username };
  users.push(newUser);
  res.json(newUser);
});

app.listen(5000, () => console.log("Server running on port 5000"));
