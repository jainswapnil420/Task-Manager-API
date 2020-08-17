const express = require('express');
const Task = require('../models/task.js');
const router = express.Router();

router.post('/tasks', async(req, res) => {
    const newTask = new Task(req.body);
    try {
        await newTask.save();
        res.status(201).send(newTask);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/tasks', async(req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (e) {
        res.status(500).send();
    }
});

router.get('/tasks/:taskId', async(req, res) => {
    const _taskID = req.params.taskId;
    try {
        const task = await Task.findById(_taskID);
        if (!task) {
            res.status(404).send();
        }
        res.send(task);
    } catch (e) {
        res.status(500).send();
    }
});
router.patch('/tasks/:taskId', async(req, res) => {
    const _taskID = req.params.taskId;
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid Updates' });
    }
    try {
        const task = await Task.findById(_taskID);
        updates.forEach((update) => task[update] = req.body[update]);

        await task.save();

        if (!task) {
            res.status(404).send();
        }
        res.send(task);
    } catch (e) {
        res.status(500).send();
    }
});

router.delete('/tasks/:taskId', async(req, res) => {
    const _taskID = req.params.taskId;
    try {
        const task = await Task.findByIdAndDelete(_taskID);
        if (!task) {
            res.status(404).send();
        }
        res.send(task);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;