const TaskModel = require('../models/task.model');

const TaskServices = {
  createTask: async ({ taskName, description, dueDate, userId }) => {
    try {
      const task = new TaskModel({ taskName, description, dueDate, userId });
      await task.save();
      return task;
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  },

  updateTask: async ({ taskId, taskName, description, dueDate }) => {
    try {
      const task = await TaskModel.findOneAndUpdate(
        { _id: taskId },
       {$set: { taskName, description, dueDate } },
        { new: true }
      );
      return task;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  },

  deleteTask: async ({ taskId }) => {
    try {
      const task = await TaskModel.findOneAndDelete({ _id: taskId });
      return task;
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  },

  getAllTasks: async ({ userId }) => {
    try {
      const tasks = await TaskModel.find({ userId });
      return tasks;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  },
}

module.exports = TaskServices;