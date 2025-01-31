const Item = require("../models/itemModel");



exports.deleteItem = (req, res) => {
  const { id } = req.params;
  Item.delete(Number(id));
  res.status(204).send();


exports.addItem = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Le nom de l'article est requis." });
  }
  const newItem = Item.add(name);
  res.status(201).json(newItem);
>
};