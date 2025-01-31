const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");


router.post("/items", itemController.addItem);

module.exports = router;