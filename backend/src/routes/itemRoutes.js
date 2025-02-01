const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

// Route pour supprimer un article
router.delete("/items/:id", itemController.deleteItem);

router.post("/items", itemController.addItem);

module.exports = router;