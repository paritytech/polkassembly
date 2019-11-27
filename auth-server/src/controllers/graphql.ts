import { gql } from 'apollo-server-express'
import User from '../model/User'

export const typeDefs = gql`
  type User {
	id: Int
	username: String
	name: String
  }

  type Query {
	user(id: Int!): User
	users: [User]
  }
`

export const resolvers = {
	Query: {
		user(_, args) {
			return User
				.query()
				.where('id', args.id)
				.first()
		},
		async users() {
			return User.query()
		}
	}
}
