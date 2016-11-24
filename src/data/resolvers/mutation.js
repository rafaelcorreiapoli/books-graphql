/**
 * Mutation resolver
 */
export default {
  Mutation: {
    buyBook(_, { bookId }, { Book }) {
      return Book.findByIdAndUpdate(bookId, {
        $inc: {
          sold: 1,
        },
      }).exec()
    },
    insertBook(_, { title, author }, { Book }) {
      const book = new Book({
        title,
        author,
        sold: 0,
      })

      return book.save()
    },
    insertAuthor(_, { firstName, lastName }, { Author }) {
      const author = new Author({
        firstName,
        lastName,
      })

      return author.save()
    },
    insertCompany(_, { name, authors }, { Company }) {
      const company = new Company({
        name,
        authors,
      })

      return company.save()
    },
    pushAuthorToCompany(_, { author, companyId }, { Company }) {
      return Company.findByIdAndUpdate(companyId, {
        $push: {
          authors: author,
        },
      })
    },
  },
}
