const express = require("express");
const { createItem, getItems } = require("../controllers/itemController");

const router = express.Router();

router.get("/", getItems);
router.post("/", createItem);

module.exports = router;
