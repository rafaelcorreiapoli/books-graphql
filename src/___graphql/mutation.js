import {
  GraphQLObjectType,
} from 'graphql'

import * as technology from './technology/mutations'

export default new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    createTechnology: technology.create,
    updateTechnology: technology.update,
  }
});
