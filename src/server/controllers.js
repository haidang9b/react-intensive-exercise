// controllers.js
const jwt = require('jwt-simple');
const bcrypt = require('bcryptjs');

// Dummy Data (In-memory storage for simplicity)
const products = [
    { id: 1, name: 'Ohmypet Cat Scratch Plank Bone', description: `Plank Bone Made of corrugated board, which don't hurt cat's toes. Inspire your pet's natural scratching instinct Light weight with the honeycomb design, durable that brings more fun to your cat.`, price: 2.79, image: '/images/products/1.webp', category: 'dog' },
    { id: 2, name: `Catit Play Circuit Ball Toy with Scratch Pad`, description: `Circuit Ball Toy with Scratch Pad 3 -in- 1 Cardboard scratch pad Exciting circuit ball toy Crazy bouncy bee Catnip included Weight 1.32 lbs Dimensions 14.80 x 14.17 x 1.65 in`, price: 24.99, image: '/images/products/2.webp', category: 'cat' },
    { id: 3, name: `Envy Cat Toy Croissant`, description: `DIMENSION: 100*75mm MATERIAL: POLYESTER & CATNIP`, price: 12.99, image: '/images/products/3.webp', category: 'cat' },
    { id: 4, name: `Kong Dog Scrunch Knots Fox S/M`, description: `KONG Scrunch Knots are realistic pet toys that keep dogs coming back for more. Plush material scrunches around the internal coiled rope, while stretchy sides create natural movement to entice play. The internal knots satisfy natural instincts and these toys contain no stuffing for less mess. Squeaks for added enjoyment! Disclaimer: Please note that the above KONG plush toy is designed for snuggling and gentle play, and NOT SUITABLE for use as a chew toy. For aggressive or prolonged chewing, please consider KONG Extreme Rubber range of toys instead. For KONG toys, we will not be able to accommodate any returns or exchanges once they've been used.`, price: 16.99, image: '/images/products/4.webp', category: 'dog' },
    { id: 5, name: 'Kong Dog Scrunch Knots Raccoon M/L', description: `Please note that the above KONG plush toy is designed for snuggling and gentle play, and NOT SUITABLE for use as a chew toy. For aggressive or prolonged chewing, please consider KONG Extreme Rubber range of toys instead.`, price: 22.99, image: '/images/products/5.webp', category: 'dog' },
    // Add more products as needed
  ];

let users = [];  // To store registered users

// Secret key for JWT (In production, use an environment variable)
const JWT_SECRET = 'your_secret_key';

// Get All Products
const getProducts = (req, res) => {
  res.json(products);
};

// Get Product by ID
const getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
};

// Register User
const register = async (req, res) => {
    const { email, password, name } = req.body;
  
    // Validate the input
    if (!email || !password || !name) {
      return res.status(400).json({ message: 'All fields (email, password, and name) are required' });
    }
  
    // Check if email is in a valid format (simple regex for email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
  
    // Check if the user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }
  
    // Hash password and save user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { email, name, password: hashedPassword };
    users.push(newUser);
  
    res.status(201).json({ message: 'User registered successfully' });
};
  
// Login User
const login = async (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Compare passwords
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Create JWT token
  const payload = { username };
  const token = jwt.encode(payload, JWT_SECRET);

  res.json({ message: 'Login successful', token });
};

const getUserInfo = (req, res, ) => {
    const { email } = req.user;  // The email was added to the request object by the authMiddleware
  
    // Find the user based on the email in the token
    const user = users.find(user => user.email === email);
  
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    // Respond with the user's info (excluding password)
    const { password, ...userInfo } = user;
    res.json(userInfo);
  };

module.exports = { getProducts, getProductById, register, login, getUserInfo };
