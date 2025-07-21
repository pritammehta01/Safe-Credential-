const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).send('Invalid credentials');
  }
  const token = jwt.sign({ id: user._id }, 'secret');
  res.json({ token });
});
