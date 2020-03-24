const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')

const passportStrategy = require('./middleware/passport-strategy')

const authRoutes = require('./routes/auth.routes')
const postRoutes = require('./routes/post.routes')
const commentRoutes = require('./routes/comment.routes')

const app = express()
const keys = require('./keys')


// Подключение к бд
mongoose.connect(keys.MONGO_URI, {useNewUrlParser: true})
	.then(() => console.log('mongodb connected'))
	.catch(error => console.error(error))

// Защита роутов (некоторые страницы может видеть только админ)
app.use(passport.initialize())
passport.use(passportStrategy)

// Добавление методов для работы с body
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Роуты
app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)
app.use('/api/comment', commentRoutes)

module.exports = app