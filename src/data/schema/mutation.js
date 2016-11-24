const Mutation = `
  type Mutation {
    buyBook (
      bookId: Int!
    ): Book

    insertBook (
      title: String!
      author: String
    ): Book

    insertAuthor (
      firstName: String!
      lastName: String
    ): Author

    insertCompany (
      name: String!
      authors: [String]!
    ): Company

    pushAuthorToCompany (
      companyId: String!
      author: String!
    ): Company
  }
`

export default Mutation
