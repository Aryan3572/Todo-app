const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();

app.use(express.json());

app.post("/todo", async function(req,res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success) {
        return res.status(411).json({
            msg: "You sent the wrond input"
        })
        return;
    }
    await todo.Create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async function(req,res) {
    const todos = await todo.find();
    // console.log(todos); // promises

    res.json({
        todos
    })
})

app.put("/completed", async function(req,res) {
    const updatePayload = req.body;
    const parsePayload= updateTodo.safeParse(updatePayload);
    if(!parsePayload.success) {
        return res.status(411).json({
            msg: "You sent the wrond input"
        })
        return;
    }
    await todo.update({
        _id: req.body.id 
    }, {
            completed: true
        
    })
    res.json({
        msg: "Todo maked as completed"
    })
})