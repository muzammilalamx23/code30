const express = require('express');
const app = express();

const PORT = 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to my first Express server!');
});

// API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
