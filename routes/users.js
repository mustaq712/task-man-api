const express = require("express")
const User = require("../models/User")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const router = express.Router()
const auth = require('../middleware/auth')


// Register new user
router.post('/register', async (req, res) => {
    const { fullname, username, password } = req.body;
  
    try {
      let user = await User.findOne({ username });
      if (user) {
        return res.status(400).json({ msg: 'Username already taken' });
      }
  
      user = new User({ fullname, username, password });
      
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
  
      await user.save();
      res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  // Login to user account
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }
  
      const payload = {
        user: {
          id: user.id,
          username : user.username,
          fullname : user.fullname
        },
      };
  
      jwt.sign(
        payload,
        process.env.JWT_SECRET, 
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  
// Update User Password
router.patch('/password', auth ,async (req, res) => {
  const { id } = req.user; 
  const { oldPassword, newPassword } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid old password' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    res.json({ msg: 'Password updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update Username and Fullname
router.patch('/profile', auth ,async (req, res) => {
  const { id } = req.user; // Assuming you have middleware to extract user from token
  const { username, fullname } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user.username = username;
    user.fullname = fullname;
    await user.save();

    res.json({ msg: 'Username and fullname updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



  

module.exports = router;