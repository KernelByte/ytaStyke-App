// Nos traemos a express
const express = require('express');
const router = express.Router();

const { resetPassword } = require("../utils/sendEmail");
const { loginService } = require("./../services/authService");

router.post('/login', loginService);

router.post('/recovery', resetPassword);

module.exports = router;
