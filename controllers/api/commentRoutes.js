const router = require('express').Router()
const { Comment } = require('../../models')
const withAuth = require('../../utils/auth')

// Create new comment

module.exports = router