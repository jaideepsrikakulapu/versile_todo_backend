const router = require('express').Router();
const auth = require('../middleware/auth');
const Task = require('../models/Task');

router.get('/', auth, async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
});

router.post('/', auth, async (req, res) => {
  const task = new Task({ ...req.body, userId: req.user.id });
  await task.save();
  res.status(201).json(task);
});

router.put('/:id', auth, async (req, res) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id, userId: req.user.id }, req.body, { new: true });
  res.json(task);
});

router.delete('/:id', auth, async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  res.json({ msg: 'Task deleted' });
});

module.exports = router;
