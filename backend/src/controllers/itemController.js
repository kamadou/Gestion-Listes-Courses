const Item = require("../models/itemModel");

// Supprimer un article
exports.deleteItem = (req, res) => {
  const { id } = req.params;
  Item.delete(Number(id));
  res.status(204).send();
};