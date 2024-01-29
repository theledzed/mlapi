const ItemsData = require("../datasources/items.datasource");
const {
  getCategories,
  getItems,
  getAuthor,
  buildItem,
} = require("../methods/items.methods");

const itemsData = new ItemsData();

class ItemsService {
  async search(search, limit) {
    try {
      const dataReceived = await itemsData.itemsByQuery(search, limit);

      const categories = getCategories(dataReceived);
      const items = getItems(dataReceived);
      const author = getAuthor();

      const itemsSearched = {
        author,
        categories,
        items,
      };

      return itemsSearched;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findOne(id, initialQuantityReceived) {
    const itemReceived = await itemsData.itemById(id);
    const descriptionReceived = await itemsData.itemDescriptionById(id);
    if (itemReceived) {
      const author = getAuthor();
      const item = buildItem(
        itemReceived,
        descriptionReceived,
        initialQuantityReceived,
      );
      const itemFinded = {
        author,
        item,
      };

      return itemFinded;
    } else {
      throw new Error(`Product whit id ${id} not found`);
    }
  }
}

module.exports = ItemsService;
