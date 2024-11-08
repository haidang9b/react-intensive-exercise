// routes.js
const express = require('express');
const router = express.Router();
const { getProducts, getProductById, register, login, getUserInfo } = require('./controllers');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];  // Get token from Authorization header
  
    if (!token) {
      return res.status(403).json({ message: 'No token provided' });
    }
  
    try {
      // Decode the token
      const decoded = jwt.decode(token, JWT_SECRET);
      req.user = decoded;  // Attach the decoded user info to the request object
      next();  // Proceed to the next middleware or route handler
    } catch (error) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  };

  
// Get All Products
router.get('/products', getProducts);

// Get Product by ID
router.get('/products/:id', getProductById);

// Register User
router.post('/users/register', register);

// Login User
router.post('/users/login', login);

// Get User Info (Protected Route)
router.get('/users/me', authMiddleware, getUserInfo);  // Use the authMiddleware to protect the route

module.exports = router;
