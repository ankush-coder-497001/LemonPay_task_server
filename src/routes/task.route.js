const express = require('express');
const taskRoute = express.Router();
const Auth = require('../middlewares/AuthMiddleware');
const TaskController = require('../controllers/task.ctrl');
taskRoute.post('/create',Auth, TaskController.create);
taskRoute.put('/update/:taskId',Auth, TaskController.update);
taskRoute.delete('/delete/:taskId',Auth, TaskController.delete);
taskRoute.get('/getAll',Auth, TaskController.getAll);

module.exports = taskRoute;