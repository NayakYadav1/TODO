const mongoose = require('mongoose');
const { schema } = mongoose;
/*
    const todoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);
*/

const toDoSchema = new mongoose.Schema ({
    title: {
        type: String
    },
    description: {
        type: String
    }
});

const todo = mongoose.model('Todo', toDoSchema);

module.exports = todo