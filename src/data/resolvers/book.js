/**
 * Book resolver
 */
export default {
  Book: {
    author(book, args, { Author }) {
      return Author.findById(book.author)
    },
    authorsWhoLiked(book, args, { Book }) {
      return new Promise((resolve, reject) => {
        Book.findById(book._id)
          .populate('authorsWhoLiked')
          .exec((err, foundAuthor) => {
            console.log(foundAuthor)
            if (err) return reject(err)
            return resolve(foundAuthor.authorsWhoLiked)
          })
      })
    },
  },
}
