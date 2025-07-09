// import jwt from 'jsonwebtoken';
// import user from '../models/user.js';

// const authentication = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({
//         success: false,
//         message: 'Authorization token not found or invalid.',
//       });
//     }

//     const token = authHeader.split(' ')[1];

//     const decoded = jwt.verify(token, process.env.KEY);

//     req.user = await user.findById(decoded._id);

//     if (!req.user) {
//       return res.status(404).json({
//         success: false,
//         message: 'User not found.',
//       });
//     }

//     next();
//   } catch (error) {
//     return res.status(401).json({
//       success: false,
//       message: 'Invalid or expired token, please log in again.',
//     });
//   }
// };

// export default authentication;
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const authentication = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Authorization token not found or invalid.',
      });
    }

    const token = authHeader.split(' ')[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.KEY);

    // Find user from decoded _id
    const existingUser = await User.findById(decoded._id);

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found.',
      });
    }

    req.user = existingUser; // Attach user to request
    next(); // Proceed to next middleware/controller
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token, please log in again.',
    });
  }
};

export default authentication;
