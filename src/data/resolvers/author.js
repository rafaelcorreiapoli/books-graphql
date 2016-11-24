import { Types } from 'mongoose'

/**
 * Author resolver
 */
export default {
  Author: {
    books(author, args, { Book }) {
      return Book.find({
        author: author._id,
      })
    },
    companies(author, args, { Company }) {
      return Company.find({
        authors: Types.ObjectId(author._id),
      }).exec()
    },
  },
}
