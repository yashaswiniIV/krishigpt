// backend/server.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000; // Use port from .env or default to 3001

// Middleware
app.use(cors()); // Allow requests from your frontend
app.use(express.json()); // Allow server to parse JSON request bodies

// Simple test route
app.get('/', (req, res) => {
  res.send('KrishiGPT Backend is running!');
});

// Placeholder for future API routes
// app.use('/api', yourApiRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});