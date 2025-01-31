const items = []; // Simule une base de données en mémoire

class Item {
  constructor(name) {
    this.id = items.length + 1;
    this.name = name;
    this.purchased = false;
  }

  static getAll() {
    return items;
  }

  static add(name) {
    const newItem = new Item(name);
    items.push(newItem);
    return newItem;
  }

  static markAsPurchased(id) {
    const item = items.find((i) => i.id === id);
    if (item) {
      item.purchased = true;
    }
    return item;
  }
}

module.exports = Item;