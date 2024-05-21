// routes/tasks.js
const express = require('express');
const Task = require('../models/Task');
const router = express.Router();
const auth = require('../middleware/auth')

// Create a Task
router.post('/', auth,async (req, res) => {
  const { name, userId } = req.body;
  try {
    const newTask = new Task({ name, userId });
    const task = await newTask.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get All Tasks
router.get('/', auth, async (req, res) => {
    try {
      // Extract user ID from the request object (added by authMiddleware)
      const userId = req.user.id;
  
      const { completed, search } = req.query;
      let query = { userId }; // Filter tasks by user ID
  
      if (completed !== undefined) {
        query.completed = completed === 'true';
      }
  
      if (search) {
        query.name = { $regex: search, $options: 'i' };
      }
  
      const tasks = await Task.find(query);
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
  });
  
  router.get('/test',  async (req, res) => {
    try {
      // Extract user ID from the request object (added by authMiddleware)
      const userId = req.user.id;
  
      const { completed, search } = req.query;
      let query = { userId }; // Filter tasks by user ID
  
      if (completed !== undefined) {
        query.completed = completed === 'true';
      }
  
      if (search) {
        query.name = { $regex: search, $options: 'i' };
      }
  
      const tasks = await Task.find(query);
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
  });
  

// Update a Task
router.put('/:id', auth ,async (req, res) => {
  const { name, completed } = req.body;
  try {
    let task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    if (name !== undefined) task.name = name;
    if (completed !== undefined) task.completed = completed;

    task = await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Delete a Task
router.delete('/:id', auth ,async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Task removed' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

router.patch('/:id/priority', auth, async (req, res) => {
  const { id } = req.params;
  const { priority } = req.body;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    task.priority = priority;
    await task.save();

    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Mark Task as Completed
router.patch('/:id/completed', auth,async (req, res) => {
    try {
      let task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ msg: 'Task not found' });
      }
  
      task.completed = req.body.completed;
      task = await task.save();
      res.json(task);
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
  });
  

module.exports = router;
