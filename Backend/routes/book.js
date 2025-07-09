import express from 'express';
import user from '../models/user.js';
import books from '../models/book.js';
import authentication from './auth.js';

const router = express.Router();

// Default GET route - Get all books
router.get("/", async (req, res) => {
  try {
    const allBooks = await books.find().sort({ createdAt: -1 });
    return res.status(200).json({ status: "Success", data: allBooks });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Add a book (admin only)
router.post("/add-book", authentication, async (req, res) => {
  try {
    const isUser = await user.findById(req.user._id);
    if (isUser.role === "user") {
      return res.status(403).json({ message: "You don't have this access" });
    }

    const book = new books({
      url: req.body.url,
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      desc: req.body.desc,
      lang: req.body.lang
    });

    await book.save();
    return res.status(201).json({ message: "Book added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a book
router.put("/update-book", authentication, async (req, res) => {
  try {
    const { bookid } = req.headers;

    await books.findByIdAndUpdate(bookid, {
      url: req.body.url,
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      desc: req.body.desc,
      lang: req.body.lang
    });

    return res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a book
router.delete("/delete-book", authentication, async (req, res) => {
  try {
    const { bookid } = req.headers;

    await books.findByIdAndDelete(bookid);
    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all books (again, for explicit route)
router.get("/get-all-books", async (req, res) => {
  try {
    const allBooks = await books.find().sort({ createdAt: -1 });
    return res.status(200).json({ status: "Success", data: allBooks });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Get recent 4 books
router.get("/get-recent-books", async (req, res) => {
  try {
    const recentBooks = await books.find().sort({ createdAt: -1 }).limit(4);
    return res.status(200).json({ status: "Success", data: recentBooks });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Get single book by ID
router.get("/get-book/:id", async (req, res) => {
  try {
    const bookid = req.params.id;
    const book = await books.findById(bookid);
    return res.status(200).json({ status: "Success", data: book });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Get user cart
router.get("/get-user-cart", authentication, async (req, res) => {
  try {
    const foundUser = await user.findById(req.user._id).populate("cart");
    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ status: "Success", data: foundUser.cart });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
