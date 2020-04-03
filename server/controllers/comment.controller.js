const Comment = require('../models/comment.model')
const Post = require('../models/post.model')

module.exports.create = async (req, res) => {
  try {
    const { name, text, postId } = req.body
    const comment = new Comment({ name, text, postId })

    await comment.save()

    const post = await Post.findById(postId)
    post.comments.push(comment._id)
    await post.save()

    res.status(201).json(comment)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.like = async (req, res) => {
  try {
    console.log(req.body.rating)
    console.log(req.body.id)

    const $set = {
      rating: ++req.body.rating
    }

    await Post.findOneAndUpdate(
      {
        _id: req.body.id
      },
      { $set }
    )

    res.status(204).json()
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.dislike = async (req, res) => {
  try {
    const $set = {
      rating: --req.body.rating
    }

    await Post.findOneAndUpdate(
      {
        _id: req.body.id
      },
      { $set }
    )

    res.status(204).json()
  } catch (e) {
    res.status(500).json(e)
  }
}
