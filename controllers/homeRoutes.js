const router = require('express').Router();
const { Post, User } = require('../models');
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
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

// Get signup

module.exports = router;
