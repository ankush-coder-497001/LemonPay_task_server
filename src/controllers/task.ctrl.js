const TaskServices = require('../services/task.srv');
const TaskController = {
  create : async (req, res) => {
    const {userId} = req.user; // Extract userId from the token
    if(!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
      const {taskName , description , dueDate} = req.body;
      const task  = await TaskServices.createTask({taskName , description , dueDate, userId});
      if(!task) {
        return res.status(400).json({ message: 'Task creation failed' });
      }
      return res.status(201).json({ message: 'Task created successfully', task });
    } catch (error) {
      console.error('Error creating task:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
  update : async (req,res) =>{
    const {userId} = req.user; // Extract userId from the token
    if(!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
      const {taskId} = req.params;
      const {taskName , description , dueDate} = req.body;
      const task  = await TaskServices.updateTask({taskId , taskName , description , dueDate});
      if(!task) {
        return res.status(400).json({ message: 'Task update failed' });
      }
      return res.status(200).json({ message: 'Task updated successfully', task });
    } catch (error) {
      console.error('Error updating task:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
  delete : async (req,res) =>{
    const {userId} = req.user; // Extract userId from the token
    if(!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
      const {taskId} = req.params;
      const task  = await TaskServices.deleteTask({taskId });
      if(!task) {
        return res.status(400).json({ message: 'Task deletion failed' });
      }
      return res.status(200).json({ message: 'Task deleted successfully', task });
    } catch (error) {
      console.error('Error deleting task:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
  getAll : async (req,res) =>{
    const {userId} = req.user; // Extract userId from the token
    if(!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
      const tasks  = await TaskServices.getAllTasks({userId});
      if(!tasks) {
        return res.status(400).json({ message: 'No tasks found' });
      }
      return res.status(200).json({ message: 'Tasks retrieved successfully', tasks });
    } catch (error) {
      console.error('Error retrieving tasks:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
}

module.exports = TaskController