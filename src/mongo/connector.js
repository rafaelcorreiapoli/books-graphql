import mongoose from 'mongoose'

const HOST = 'localhost'
const DB = 'test'

mongoose.connect(`mongodb://${HOST}/${DB}`)
mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', (err) => {
  console.log(`error connection to mongo ${err}`)
})
db.once('open', () => {
  console.log('connected to mongo')
})


export default db
