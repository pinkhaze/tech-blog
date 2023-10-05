const router = require('express').Router();
const userRoutes = require('./userRoutes');
const logoutRoute = require("./logoutRoute");
const postRoutes = require("./postRoutes");


router.use('/users', userRoutes);
router.use("/logout", logoutRoute);
router.use("/posts", postRoutes);

module.exports = router;