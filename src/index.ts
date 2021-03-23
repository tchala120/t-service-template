import 'module-alias/register'
import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'

import setupDatabase from '@src/database'
import { schema as typeDefs } from '@src/schema'
import { resolvers } from '@src/resolver'

export interface IContext {
  [key: string]: any
}

setupDatabase()

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.applyMiddleware({
  app,
})

app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`))
