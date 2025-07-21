# 🛍️ Products API

A simple, file-based product inventory API built using **Express.js**. This RESTful API allows users to perform CRUD operations (Create, Read, Update, Delete) on a product list, with all data stored persistently in a local `products.json` file. It’s a lightweight solution ideal for beginners or small-scale applications that don't require a full-fledged database.

---

## 🚀 Features

- ✅ Create new products
- ✅ Retrieve all products
- ✅ Prevent creation of duplicate products (by name)
- ✅ Update product quantity
- ✅ Delete products
- ✅ Data persistence using JSON file (`products.json`)
- ✅ API tested using Postman

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **Yarn** (as package manager)
- **Postman** (for API testing)
- **File-based storage** using Node's `fs` module

---

## 📂 Project Structure

```
Products API/
├── src/
│   ├── model/
│   │   └── Product.js
│   ├── repository/
│   │   └── ProductsRepository.js
│   ├── product.routes.js
│   └── server.js
├── products.json
├── package.json
├── yarn.lock
└── README.md
```

---

## 📦 Installation & Setup

### Prerequisites

- Node.js installed
- Yarn installed

### Clone the repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-steviedave.git
cd week-2-express-js-assignment-steviedave
```

### Install dependencies

```bash
yarn
```

### Start the development server

```bash
yarn dev
```

> The server runs on `http://localhost:3333`

---

## 📬 API Endpoints

All endpoints are prefixed with `/products`.

### ➕ Create a new product

**POST** `/products`

**Request Body (JSON):**
```json
{
  "name": "Laptop",
  "description": "A powerful gaming laptop",
  "quantity": 5,
  "price": 1500
}
```

**Response:**
- `201 Created` if successful
- `400 Bad Request` if product already exists

---

### 📦 Get all products

**GET** `/products`

This endpoint returns all the products that have been created and stored in the system. Once your server is running, you can visit this endpoint directly in your browser or use Postman to send a `GET` request.

🌐 To view your product list:
- Open a browser or Postman
- Enter the URL: `http://localhost:3333/products`
- You should see an array of product objects in JSON format

Example Response:
```json
[
  {
    "id": "uuid-value",
    "name": "Laptop",
    "description": "A powerful gaming laptop",
    "quantity": 5,
    "price": 1500,
    "created_at": "2025-07-20T14:00:00.000Z"
  }
]
```

---

### 🔄 Update quantity

**PATCH** `/products/:id/quantity`

**Request Body (JSON):**
```json
{
  "quantity": 10
}
```

---

### ❌ Delete product

**DELETE** `/products/:id`

---

## 💾 File-Based Storage

All product data is saved persistently in a local file named `products.json`. This approach avoids the need for a database while still maintaining data between sessions.

Whenever you create, update, or delete a product, the system automatically updates this file.

---

## 🧪 Postman Testing Screenshots

Below are example screenshots from testing this API using [Postman](https://www.postman.com/). These visuals help confirm the expected behavior of each route.

### 📸 Creating a New Product  
![Create Product Screenshot](screenshots/Screenshot%202025-07-21%20044810.png)

### 📸 Deleting Product  
![Deleting Product Screenshot](screenshots/Screenshot%2025-07-21%044723.png)

### 📸 Getting All Products  
![Get All Products Screenshot](screenshots/Screenshot%202025-07-21%20032850.png)

### 📸 API Localhost Port  
![API Screenshot](screenshots/Screenshot%202025-07-21%20044645.png)

---

## 👨‍💻 Author

**Stephen David Oduor**

---

## 🏁 Starting the Project

To start the server in development mode:

```bash
yarn dev
```

Your API will now be live at `http://localhost:3333`, and you can begin interacting with it via Postman or your browser.

---

## 📄 License

This project is open-source and free to use for learning and development purposes.
