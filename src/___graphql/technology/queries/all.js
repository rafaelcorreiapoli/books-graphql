import {
  GraphQLList
} from 'graphql'

import TechnologyModel from '../../../mongo/technology'
import TechnologyType from '../types/technology'

export default {
  type: new GraphQLList(TechnologyType),
  resolve() {
    return TechnologyModel.find()
  }
}
