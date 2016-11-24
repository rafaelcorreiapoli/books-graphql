import { merge } from 'lodash'

import book from './book'
import author from './author'
import company from './company'
import mutation from './mutation'
import query from './query'

export default merge(mutation, query, book, author, company)
