const express = require('express');

const router = express.Router();

router.use('/users', require("./users"));
router.use('/todo', require("./tasks"));

module.exports = router;