const express = require('express');
const app = express();

const usersRoutes = require('./routes/users');

const PORT = 3000;

app.use(express.json());
app.get('/',(req,res) => { 
    res.send('Welcome to my first Express server!');
});

// API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

app.use('/api/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
