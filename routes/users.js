const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController')

router.post('/signup',userController.create);
router.post('/signin',userController.createsession);
module.exports = router;