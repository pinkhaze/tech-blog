const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

// Get all posts on homepage
router.get('/', async (req, res) => {
  try {
      res.render('homepage')
  } catch (err) {
      res.status(500).json(err)
  }
})


// Get post by id


// Get login 
router.get('/login', (req, res) => {
  if (req.session.user_id) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

// Get signup
// Route to render the signup page
router.get('/register', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard')
    return
  }
  res.render('register')
})


module.exports = router;
