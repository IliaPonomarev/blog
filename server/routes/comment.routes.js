const {Router} = require('express')
const {create} = require('../controllers/comment.controller')
const router = new Router()

// /api/comment
router.post('/create', create)

module.exports = router