const { response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')

const app = express()

mongoose.connect('mongodb://localhost/blog', { useUnifiedTopology: true , useNewUrlParser: true})

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))



app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Description'
    },{
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test Description 2'
    }]
    res.render('articles/index', {articles: articles})
})
app.listen(5000)

app.use('/articles', articleRouter)