import { gql } from 'apollo-server-core'

export const schema = gql`
  scalar Date

  type Me {
    name: String
  }

  type Query {
    me: Me
  }

  type Mutation {
    login: Me
  }
`
