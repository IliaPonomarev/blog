const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  views: {
    type: Number,
    default: 0
  },
  imageUrl: String,
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'comments'
    }
  ],
  seo: {
    title: String,
    description: String,
    keywords: String
  }
})

module.exports = model('posts', postSchema)
