// Nos traemos a express
const express = require('express');
const router = express.Router();

const { loginService } = require("./../services/authService");

router.post('/login', loginService);

//router.post('/register', registreService);

module.exports = router;
