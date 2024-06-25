const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./model/todo');

require('dotenv').config();

const app = express();
app.use(express.json());

require('./MongoDB')

app.get('/', (req, res) => {
    res.send('Welcome everyone this is index.js page which is default');
})

// GET Method
app.get('/todos', async(req, res) => {
    try{
        const toDo = await Todo.find();
        res.status(200).json(toDo); 
    }
    catch(err){
        console.error("There is an error", err);
        res.status(500).json({err: "Internal Error"});
    }
})

// CREATE Method
app.post('/todos/create', async (req, res) => {
    try{
        const newToDO = await Todo.create(req.body);
        res.status(200).json(newToDO);
    }
    catch(err) {
        console.error("There is an error", err);
        res.status(500).json({err: "Internal Error"});
    }
})

// PUT Method
app.put('/todos/:id', async(req, res) => {
    try{
        const updatedToDo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        res.status(200).json(updatedToDo);
    }
    catch(err){
        console.error('There is an error', err);
        res.status(500).json({ err: "Internal Error"});
    }
})

// DELETE Method
app.delete('/todos/:id', async(req, res) => {
    try{
        await Todo.findByIdAndDelete(req.params.id);
        res.status(204).send();
    }
    catch(err){
        console.error('There is an error', err);
        res.status(500).json({ err: "Internal Error" });
    }
})

const port = 3000;
app.listen (port, () => {
    console.log(`Server successfully started on port ${port}`);
})

