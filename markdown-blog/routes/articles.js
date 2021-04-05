const express = require('express')
const Article = require('./../models/article')
const router = express.Router()

router.get('/new', (req, res)=>{
    res.render('articles/new')
})

router.get('/:id', (req, res) => {
    
})

router.post('/',    (req, res)=>{
    
    
})


module.exports = router

