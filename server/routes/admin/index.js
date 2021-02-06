module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Category = require('../../models/Category')
    router.post('/categories', async(req, res)=>{
        try{
            const model = await Category.create(req.body)
            res.send(model)
        }catch (err){
            res.status(500).json({ message: err.message });
        }
      
    })
    router.put('/categories/:id', async(req, res)=>{
        try{
            const model = await Category.findByIdAndUpdate(req.params.id, req.body)
            res.send(model)
        }catch (err){
            res.status(500).json({ message: err.message });
        }
      
    })
    router.delete('/categories/:id', async(req, res)=>{
        try{
           await Category.findByIdAndDelete(req.params.id, req.body)
            res.send({
                success:true
            })
        }catch (err){
            res.status(500).json({ message: err.message });
        }
      
    })
    router.get('/categories', async(req, res)=>{
        const items = await Category.find().populate('parent').limit(10)
        res.send(items)
    })
    router.get('/categories/:id', async(req, res)=>{
        const model = await Category.findById(req.params.id)
        res.send(model)
    })
    app.use('/admin/api', router)
}