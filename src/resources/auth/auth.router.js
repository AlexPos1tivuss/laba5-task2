
const express = require('express');
const { register, login } = require('./auth.controller');

const router = express.Router();

router.post('/users', register);
router.post('/login', login);

module.exports = router;
