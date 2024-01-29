const axios = require("axios");

class ItemsData {
  async itemsByQuery(search, limit) {
    try {
      const response = await axios.get(
        `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=${limit}`,
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch data from API");
    }
  }
  async itemById(id) {
    try {
      const response = await axios.get(
        `https://api.mercadolibre.com/items/${id}`,
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch data from API");
    }
  }
  async itemDescriptionById(id) {
    try {
      const response = await axios.get(
        `https://api.mercadolibre.com/items/${id}/description`,
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch data from API");
    }
  }
}

module.exports = ItemsData;
