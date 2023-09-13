const express = require('express');
const router = express.Router();
const getUserController = require('../controllers/userController');
const { checkAuth } = require('../middleware/auth');

router.get('/user', checkAuth, getUserController);

module.exports = router;
