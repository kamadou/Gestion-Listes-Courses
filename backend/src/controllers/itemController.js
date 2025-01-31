const Item = require("../models/itemModel");

// Marquer un article comme acheté
exports.markAsPurchased = (req, res) => {
  const { id } = req.params;
  const item = Item.markAsPurchased(Number(id));
  if (!item) {
    return res.status(404).json({ message: "Article non trouvé." });
  }
  res.status(200).json(item);
};