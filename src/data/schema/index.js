import { makeExecutableSchema } from 'graphql-tools'
import Author from './author'
import Book from './book'
import Company from './company'
import RootQuery from './query'
import Mutation from './mutation'
import SchemaDefinition from './schema'
import resolvers from '../resolvers'

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, Mutation, Book, Author, Company],
  resolvers,
})
