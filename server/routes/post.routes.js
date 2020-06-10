const passport = require('passport')
const { Router } = require('express')
const upload = require('../middleware/upload')
const ctr = require('../controllers/post.controller')

const router = Router()

// /api/post/admin

// admin
router.post(
  '/admin/',
  passport.authenticate('jwt', { session: false }),
  upload.single('image'),
  ctr.create
)

router.get(
  '/admin/',
  passport.authenticate('jwt', { session: false }),
  ctr.getAll
)

router.get(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  ctr.getById
)

router.put(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  ctr.update
)

router.delete(
  '/admin/:id',
  passport.authenticate('jwt', { session: false }),
  ctr.remove
)

router.get(
  '/admin/get/analytics',
  passport.authenticate('jwt', { session: false }),
  ctr.getAnalytics
)

// /api/post

// Base

router.get('/', ctr.getAll)

router.get('/get/withoutmainpost', ctr.getWithoutMainPost)

router.get('/:id', ctr.getById)

router.get('/get/mainpost', ctr.getMainPost)

router.get('/get/getmostreadposts', ctr.getMostReadPosts)

router.put('/makemain/:id', ctr.makeMain)

router.put('/unmakemain/:id', ctr.unMakeMain)

router.put('/add/view/:id', ctr.addView)

module.exports = router
