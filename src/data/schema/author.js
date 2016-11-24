// author.js
import Book from './book'

const Author = `
  type Author {
    _id: String! # the ! means that every author object _must_ have an id
    firstName: String
    lastName: String
    books: [Book] # the list of Posts by this author
    companies: [Company]
  }
`

// we export Author and all types it depends on
// in order to make sure we don't forget to include
// a dependency
export default () => [Author, Book]
