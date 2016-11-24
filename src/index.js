import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import schema from './data/schema'
import Author from './mongo/author'
import Company from './mongo/company'
import Book from './mongo/book'
import './mongo/connector'

const PORT = 3000

const app = express()

const graphQLOptions = {
  schema,
  context: {
    Author,
    Book,
    Company,
  },
}

app.use('/graphql', bodyParser.json(), graphqlExpress(graphQLOptions))

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}))

app.listen(PORT)
