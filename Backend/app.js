import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// Routes
import user from "./routes/user.js";
import book from "./routes/book.js";
import fav from "./routes/favourite.js";
import order from "./routes/order.js";
import cart from "./routes/cart.js";

// MongoDB connection
import conn from "./conn/conn.js";

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
conn();

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // allow frontend
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api/v1/users", user);
app.use("/api/v1/books", book);
app.use("/api/v1/favs", fav);
app.use("/api/v1/orders", order);
app.use("/api/v1/cart", cart);

// Default route
app.get("/", (req, res) => {
  res.send("✅ Bookish Backend is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
