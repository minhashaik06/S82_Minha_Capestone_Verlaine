const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  createIngredient,
  getIngredients,
} = require("../controllers/productIngredientController");


router.post("/product", createProduct);
router.get("/products", getProducts);
router.post("/ingredient", createIngredient);
router.get("/ingredients", getIngredients);

module.exports = router;
