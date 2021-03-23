import mongoose from 'mongoose'

import { COLLECTION_NAME, PASSWORD, USERNAME } from '@constants/environment'

function setupDatabase(): void {
  const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.eignu.mongodb.net/${COLLECTION_NAME}?retryWrites=true&w=majority`

  mongoose.Promise = global.Promise
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Database connected'))
    .catch((e: Error) => {
      throw e.message
    })
}

export default setupDatabase
