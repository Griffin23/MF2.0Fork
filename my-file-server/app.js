const express = require('express');
const path = require('path');

const app = express();
const cors = require('cors');

// Enable CORS for all routes and origins
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../dist/mfe1')));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
