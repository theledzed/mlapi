const getCategories = (dataRecived) => {
  const { filters, available_filters } = dataRecived;
  const categoriesFilter = filters.find((filters) => filters.id === "category");
  const categoriesAvailableFilters = available_filters.find(
    (filters) => filters.id === "category",
  );
  if (categoriesFilter) {
    const categoriesValues = categoriesFilter.values[0].path_from_root;
    return categoriesValues.map((categories) => categories.name);
  } else if (categoriesAvailableFilters) {
    const categoriesValues = categoriesAvailableFilters.values;
    return categoriesValues.map((categories) => categories.name);
  }
  return [];
};

const getDecimals = (amount) => {
  const n1 = Math.trunc(amount);
  return amount - n1;
};

const buildItem = (
  {
    id,
    title,
    condition,
    price,
    currency_id,
    thumbnail,
    shipping,
    available_quantity,
    initial_quantity,
    seller,
    pictures,
  },
  description,
  initialQuantityReceived,
) => {
  const { free_shipping } = shipping;

  const seller_name = seller && seller.nickname ? seller.nickname : "";

  const itemBody = {
    id,
    title,
    price: {
      currency: currency_id,
      amount: price,
      decimals: getDecimals(price),
    },
    picture: thumbnail,
    condition,
    free_shipping,
    seller_name,
  };

  if (description) {
    const { plain_text = null } = description;
    itemBody.sold_quantity = initial_quantity - initialQuantityReceived;
    itemBody.description = plain_text;
    itemBody.picture = pictures[0].secure_url;
  } else {
    itemBody.available_quantity = available_quantity;
  }

  return itemBody;
};

const getItems = (dataRecived) => {
  const { results } = dataRecived;
  const items = results.map((item) => {
    return buildItem(item);
  });
  return items;
};

const getAuthor = () => {
  return {
    name: "Cristopher",
    lastName: "Flores",
  };
};

module.exports = { getCategories, getItems, getAuthor, buildItem };
