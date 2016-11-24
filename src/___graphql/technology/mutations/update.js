import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql'

/**
 * Technology - Update a technology
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
    const {
      _id
    } = args

    TechnologyModel.findByIdAndUpdate(_id, {
      $set: {
        size: 'large'
      }
    }, {
      new: true
    })
  }
}
