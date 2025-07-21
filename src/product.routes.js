import express from "express";
import { ProductsRepository } from "./repository/ProductsRepository.js";

const productRoute = express.Router();
const productRepository = new ProductsRepository();

productRoute.post("/", (request, response) => {
  const { name, description, quantity, price } = request.body;

  const productAlreadyExists = productRepository.findByName({ name });

  if (productAlreadyExists) {
    return response.status(404).json({error: "Product already exists"});
  }

  productRepository.create({ name, description, quantity, price });

  return response.status(201).send("Product created ✅");
});

productRoute.get("/", (request, response) => {
  const allProducts = productRepository.list()
  return response.status(200).json(allProducts);
});

productRoute.delete("/:id", (request, response) => {
  const { id } = request.params;

  const product = productRepository.findById({ id });

  if (!product) {
    return response.status(404).json({ error: "Product not found"});
  }

  productRepository.delete({ id });

  return response.status(201).send();
})

productRoute.patch("/:id", (request, response) => {
  const { id } = request.params;
  const { quantity } = request.headers;

  const product = productRepository.findById({ id });

  if (!product) {
    return response.status(404).json({ error: "Product not found"});
  }

  const updatedProduct = productRepository.updateQuantity({ id, quantity});

  return response.status(201).json(updatedProduct);
});

export { productRoute };
