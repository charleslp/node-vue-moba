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
    router.get('/categories', async(req, res)=>{
        const items = await Category.find()
        res.send(items)
      })
    app.use('/admin/api', router)
}