const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Basic route to test server
app.get('/', (req, res) => {
  res.send('🌧️ Rainfall Tracker is huba Working!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
