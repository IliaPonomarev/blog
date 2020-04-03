const { Router } = require('express')
const { create, like, dislike } = require('../controllers/comment.controller')
const router = new Router()

// /api/comment
router.post('/create', create)

router.post('/like', like)

router.post('/dislike', dislike)



module.exports = router