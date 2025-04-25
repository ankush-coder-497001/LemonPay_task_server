const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
  taskName :{
    type: String,
    required: true,
  },
  description:{
    type: String,
  },
  dueDate:{
    type: Date,
    required: true,
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now,
  },
})

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;