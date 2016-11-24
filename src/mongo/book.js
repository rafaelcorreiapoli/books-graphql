import mongoose, { Schema } from 'mongoose'

/**
 * Book schema
 */

const bookSchema = new Schema({
  id: Schema.Types.ObjectId,
  title: String,
  sold: Number,
  author: { type: Schema.Types.ObjectId, ref: 'Book' },
  authorsWhoLiked: [{ type: Schema.Types.ObjectId, ref: 'Author' }],
})

export default mongoose.model('Book', bookSchema)
