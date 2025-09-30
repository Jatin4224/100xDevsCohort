const express = require("express");
const app = express();
const axios = require("axios");

const fetchMultiple = async () => {
  try {
    const [user1, user2] = await Promise.all([
      axios.get("https://api.github.com/users/hiteshchoudhary"),
      axios.get("https://api.github.com/users/piyushgarg-dev "),
    ]);
    console.log(user1.data.name, user2.data.name);
  } catch (error) {
    console.error(error.message);
  }
};

fetchMultiple();

app.listen(3000, () => {
  console.log("server running fine");
});
