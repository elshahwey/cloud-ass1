const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); 

// Sample route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});