const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

// Route pour marquer un article comme acheté
router.put("/items/:id/purchased", itemController.markAsPurchased);

module.exports = router;