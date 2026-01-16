const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();

app.use(express.json());

app.post("/data",  function(req,res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success) {
        return res.status(411).json({
            msg: "You sent the wrond input"
        })
        return;
    }
})

app.get("/data",  function(req,res) {

})

app.put("/data", function(req,res) {
    const updatePayload = req.body;
    const parsePayload= updateTodo.safeParse(updatePayload);
    if(!parsePayload.success) {
        return res.status(411).json({
            msg: "You sent the wrond input"
        })
        return;
    }
})