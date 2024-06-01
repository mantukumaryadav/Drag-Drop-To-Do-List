const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.post('/add', async (req, res) => {
  const { title, description } = req.body;
  const newTask = new Task({ title, description });
  await newTask.save();
  res.status(201).json(newTask);
});

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.put('/:id', async (req, res) => {
  const { status } = req.body;
  const task = await Task.findById(req.params.id);
  task.status = status;
  if (status === 'Completed') task.timestamp = new Date();
  await task.save();
  res.json(task);
});

module.exports = router;
