const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Hardcoded products (no DB for now)
const products = [
  { id: 1, name: "Laptop", price: 50000, imageUrl: "https://via.placeholder.com/150" },
  { id: 2, name: "Headphones", price: 2000, imageUrl: "https://via.placeholder.com/150" },
  { id: 3, name: "Smartphone", price: 30000, imageUrl: "https://via.placeholder.com/150" },
  { id: 4, name: "Watch", price: 5000, imageUrl: "https://via.placeholder.com/150" },
  { id: 5, name: "Keyboard", price: 1500, imageUrl: "https://via.placeholder.com/150" }
];

// API Routes
app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/checkout", (req, res) => {
  const { cart } = req.body;
  console.log("Received order:", cart);
  res.json({ message: "Order received successfully!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
