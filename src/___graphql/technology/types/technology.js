import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLEnumType,
  GraphQLNonNull
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Technology',
  description: 'Represent a technology',
  fields: () => ({
    _id: {type: GraphQLString},
    name: {type: GraphQLString},
  })
});
