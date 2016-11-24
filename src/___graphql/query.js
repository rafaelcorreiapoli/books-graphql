import {
  GraphQLObjectType,
} from 'graphql'

import * as technology from './technology/queries'

export default new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    technologies: technology.all
  }
});
