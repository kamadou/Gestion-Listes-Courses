
const items = [];

const items = []; 


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


  static delete(id) {
    const index = items.findIndex((i) => i.id === id);
    if (index !== -1) {
      items.splice(index, 1);
    }
  }

}

module.exports = Item;