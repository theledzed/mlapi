## Getting Started

First run the server and after run de client:

```bash
npm install

npm run dev
# or
yarn install

yarn dev

```

Open locally on [http://localhost:3000/api](http://localhost:3000/api) with your browser to see the result.

Open remote on [https://mlapi-seven.vercel.app/api](https://mlapi-seven.vercel.app/api) with your browser to see the result.

## GET PRODUCTS BY QUERY

Used to retrieve a list about products.

```
/api/items?q={product_name}&limit={quantity}
```
q: The name of the product being searched.

limit: The quantity of items to be returned in the response.

### Example Usage

#### Request

```
GET /api/items?q=iphone&limit=4
```
#### Successful Response

```
{
  "author": {
    "name": "Cristopher",
    "lastName": "Flores"
  },
  "categories": ["Celulares y Smartphones"],
  "items": [
    {
      "id": "MLA1401249643",
      "title": "Apple iPhone 12 (128 Gb) - Negro - Distribuidor Autorizado",
      "price": {
        "currency": "ARS",
        "amount": 1319999.34,
        "decimals": 0.34
      },
      "picture": "http://http2.mlstatic.com/D_743195-MLA45719932493_042021-I.jpg",
      "condition": "new",
      "free_shipping": true,
      "available_quantity": 1
    },
    {
      "id": "MLA1402997669",
      "title": "Apple iPhone 14 (128 Gb) - Morado",
      "price": {
        "currency": "ARS",
        "amount": 1254000,
        "decimals": 0
      },
      "picture": "http://http2.mlstatic.com/D_786356-MLM51559385272_092022-I.jpg",
      "condition": "new",
      "free_shipping": true,
      "available_quantity": 1
    },
    {
      "id": "MLA1404752709",
      "title": "Apple iPhone 13 (128 Gb) - Verde",
      "price": {
        "currency": "ARS",
        "amount": 1116500,
        "decimals": 0
      },
      "picture": "http://http2.mlstatic.com/D_736376-MLA49590060561_042022-I.jpg",
      "condition": "new",
      "free_shipping": true,
      "available_quantity": 1
    },
    {
      "id": "MLA1359335359",
      "title": "Apple iPhone 11 (64 Gb) - Negro",
      "price": {
        "currency": "ARS",
        "amount": 840499,
        "decimals": 0
      },
      "picture": "http://http2.mlstatic.com/D_656548-MLA46114829749_052021-I.jpg",
      "condition": "new",
      "free_shipping": true,
      "available_quantity": 1
    }
  ]
}
```

## GET PRODUCT DETAIL

GET: Used to retrieve detailed information about a specific product.

```
/api/items/{item_id}?quantity={available_quantity}
```
{item_id}: The unique identifier of the product.

quantity (integer): The available quantity of items, used to calculate sold_quantity, This value should be obtained from the endpoint that returns the list of all products.

### Example Usage

#### Request

```
GET /api/items/MLA1401249643?quantity=1
```
#### Successful Response

```
{
  "author": {
    "name": "Cristopher",
    "lastName": "Flores"
  },
  "item": {
    "id": "MLA1401249643",
    "title": "Apple iPhone 12 (128 Gb) - Negro - Distribuidor Autorizado",
    "price": {
      "currency": "ARS",
      "amount": 1319999.34,
      "decimals": 0.34
    },
    "picture": "http://http2.mlstatic.com/D_743195-MLA45719932493_042021-I.jpg",
    "condition": "new",
    "free_shipping": true,
    "sold_quantity": 9,
    "description": "The iPhone 12 features a spectacular....."
  }
}
```
