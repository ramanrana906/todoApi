const express = require('express');

const router = express.Router();

const taskController = require('../controllers/taskController')

router.post('/create-todo',taskController.create);
router.patch('/update-todo/:id',taskController.update);
router.get('/todo',taskController.alltodo);
router.delete('/todo/:id',taskController.delete);

module.exports = router;