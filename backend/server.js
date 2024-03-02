// backend/server.js

const express = require('express');
const app = express();
const db = require('./models/db');
const dataRoutes = require('./routes/dataRoutes');
// const express = require('express');
// const app = express();

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Your other routes and middleware
// ...

app.listen(5000, () => {
  console.log('Server is running on port 5001');
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/data', dataRoutes);

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
