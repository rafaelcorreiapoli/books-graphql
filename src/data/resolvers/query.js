/**
 * Query resolver
 */
export default {
  Query: {
    authors(_, args, { Author }) {
      return Author.find().exec()
    },
    books(_, args, { Book }) {
      return Book.find().exec()
    },
    companies(_, args, { Company }) {
      return Company.find().exec()
    },
  },
}
