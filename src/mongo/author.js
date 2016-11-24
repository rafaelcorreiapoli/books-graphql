import mongoose, { Schema } from 'mongoose'

/**
 * Author schema
 */

const autorSchema = new Schema({
  id: Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
})

export default mongoose.model('Author', autorSchema)
