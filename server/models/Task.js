const auth = require('../middleware/auth');

const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      title: String,
      completed: Boolean
    });
    module.exports = mongoose.model('Task', taskSchema);
    