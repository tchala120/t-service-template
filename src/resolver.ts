import type { GraphQLResolveInfo } from 'graphql'
import type { IResolvers } from 'graphql-tools'
import type { IContext } from '@src/index'
import type { IArgument } from '@src/types'

type ResolverOptions = (
  parent: ParentNode,
  args: IArgument,
  ctx: IContext,
  info: GraphQLResolveInfo
) => unknown | Promise<unknown>

interface IGraphqlResolvers extends IResolvers {
  [key: string]: {
    [key: string]: ResolverOptions
  }
}

interface IMe {
  name: string
}

const me: IMe = {
  name: 'Thetoon Dev.',
}

export const resolvers: IGraphqlResolvers = {
  Query: {
    me: () => me,
  },
  Mutation: {
    login: () => me,
  },
}
