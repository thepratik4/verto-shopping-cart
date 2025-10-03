import express from "express";
import cors from "cors";
import productsRouter from "./routes/products.js"; // Fixed import
import checkoutRouter from "./routes/checkout.js"; // Fixed import

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Use your modular routes - FIXED TYPO HERE
app.use("/api/products", productsRouter); // Changed from proproductRouter
app.use("/api/checkout", checkoutRouter);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running", timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});