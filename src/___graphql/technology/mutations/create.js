import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql'

/**
 * Technology - Create new technology
 * String _id
 * String name
 */

import TechnologyModel from '../../../mongo/technology'
import TechnologyType from '../types/technology'

export default {
  type: TechnologyType,
  args: {
    _id: {type: new GraphQLNonNull(GraphQLString)},
    name: {type: new GraphQLNonNull(GraphQLString)},
  },
  resolve: function(rootValue, args) {
    let technology = {...args}
    return TechnologyModel.insert(technology)
      .then(_ => technology)
  }
}
