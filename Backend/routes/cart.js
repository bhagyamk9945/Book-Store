import express from 'express';
import user from '../models/user.js';
import books from '../models/book.js';
import authentication from './auth.js';

const router = express.Router();

// ✅ Add a book to cart
router.put("/add-to-cart", authentication, async (req, res) => {
  try {
    const { bookId } = req.body;

    const userData = await user.findById(req.user._id);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    if (userData.cart.includes(bookId)) {
      return res.status(200).json({ message: "Book is already in cart." });
    }

    userData.cart.push(bookId);
    await userData.save();

    return res.status(200).json({
      success: true,
      message: "Book added to cart",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Remove a book from cart
router.put("/del-to-cart/:bookId", authentication, async (req, res) => {
  try {
    const { bookId } = req.params;

    await user.findByIdAndUpdate(req.user._id, {
      $pull: { cart: bookId },
    });

    return res.status(200).json({
      message: "Book removed from cart.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ✅ Get all books in user's cart
// router.get("/get-user-cart", authentication, async (req, res) => {
//   try {
//     const userData = await user.findById(req.user._id).populate("cart");

//     if (!userData || !userData.cart.length) {
//       return res.status(200).json({
//         message: "Cart is empty",
//         cart: [],
//       });
//     }

//     const cart = userData.cart.reverse();

//     return res.status(200).json({
//       success: true,
//       cart,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });
router.get("/get-user-cart", authentication, async (req, res) => {
  try {
    const { id } = req.headers;

    const userData = await user.findById(id).populate("cart");

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    const cart = userData.cart.reverse();

    return res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    console.error("Error in get-user-cart:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});


export default router;
