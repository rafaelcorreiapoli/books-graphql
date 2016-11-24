// book.js
import Author from './author'

const Book = `
  type Book {
    id: Int!
    title: String
    author: Author
    authorsWhoLiked: [Author]
    sold: Int
  }
`

export default () => [Book, Author]
