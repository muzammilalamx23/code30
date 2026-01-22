const express = require('express');
const router = express.Router();

// In-memory dummy data
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

// GET /api/users
router.get('/', (req, res) => {
  res.status(200).json(users);
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json(user);
});

// POST /api/users
router.post('/', (req, res) => {
  const newUser = req.body;

  console.log('Received user:', newUser);

  res.status(201).json({
    message: 'User created',
    user: newUser
  });
});

module.exports = router;
