const express = require("express");
const ItemsService = require("../services/items.service");

const router = express.Router();
const service = new ItemsService();

router.get("/", async (req, res) => {
  const { q, limit } = req.query;
  const items = await service.search(q, limit);
  res.json(items);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.query;
  try {
    const product = await service.findOne(id, quantity);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

module.exports = router;
