// book.js
import Author from './author'

const Company = `
  type Company {
    _id: String!
    name: String
    authors: [Author]
  }
`

export default () => [Company, Author]
