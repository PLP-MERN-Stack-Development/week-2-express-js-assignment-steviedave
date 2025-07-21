import { Product } from "../model/Product.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// To handle __dirname in ES modules:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the products JSON file
const filePath = path.join(__dirname, "../database/products.json");

class ProductsRepository {
  constructor() {
    this.products = this._loadFromFile();
  }

  // Load data from file
  _loadFromFile() {
    try {
      const data = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Failed to load products:", error);
      return [];
    }
  }

  // Save current state to file
  _saveToFile() {
    try {
      fs.writeFileSync(filePath, JSON.stringify(this.products, null, 2));
    } catch (error) {
      console.error("Failed to save products:", error);
    }
  }

  //create
  create({ name, description, quantity, price }) {
    const product = new Product();

    Object.assign(product, {
      name,
      description,
      quantity,
      price,
      created_at: new Date(),
    });

    this.products.push(product);
    this._saveToFile();
  }


  //delete
  delete({ id }) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );

    this.products.splice(productIndex, 1);
  }
  //updateQuantity
  updateQuantity({ id, quantity}) {
    const product = this.products.find((product) => product.id === id);

    product.quantity = parseInt(quantity);
    product.updated_at = new Date();

    const productIndex = this.products.findIndex((productIndex) => product.id === id);

    Object.assign( this.products[productIndex], product);

    return product;
  }
  
  //findByName
  findByName({ name }) {
    return this.products.find((product) => product.name === name);
  }

  //findById
  findById({ id }) {
    const product = this.products.find((product) => product.id);
    return product;
  }

  //list
  list() {
    return this.products;
  }
}

export { ProductsRepository };
