const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/tasks',async (req,res)=>{
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.get('/tasks',async (req,res)=>{

    try {
        let tasks = await Task.find({})
        res.status(200).send(tasks)
    } catch(e) {
        res.status(404).send(e)
    }
})

router.get('/tasks/:id',async (req,res)=>{
    const _id = req.params.id

    try {
        let task = await Task.findById(_id)
        if(!task) {
            return res.status(404).send({error:"Task not found!"})
        }
        res.send(task)
    } catch(e) {
        res.status(500).send()
    }
})

router.patch('/tasks/:id',async (req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description','completed']

    const isValidOperation = updates.every((updates)=> allowedUpdates.includes(updates))

    if(!isValidOperation) {
        return res.status(404).send({error:"Invalid updates"})
    }

    try {

        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!task) {
            return res.status(404).send()
        }
        return res.status(200).send(task)

    } catch(e) {
        res.status(400).send()
    }
})

router.delete('/tasks/:id', async (req,res)=>{

    try{
        // const task =  await Task.findByIdAndDelete(req.params.id)
        const task = await Task.findById(req.params.id)
        updates.forEach((update)=> task[update] = req.body[update])
        await task.save()
        if(!task) {
            return res.status(404).send({error:'Invalid operation'})
        }
        return res.status(200).send(task)
    }catch(e) {
        res.status(500).send()
    }
})

module.exports = router