import mongoose, { Schema } from 'mongoose'

/**
 * Company schema
 */

const companySchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  authors: [{ type: Schema.Types.ObjectId, ref: 'Author' }],
})

export default mongoose.model('Company', companySchema)
