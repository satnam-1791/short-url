const express = require('express');
const { loginUsers, logedinUsers } = require('../controllers/users');
const router = express.Router();

router.post('/',loginUsers);
router.post('/login',logedinUsers)

module.exports = router;