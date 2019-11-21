import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } from 'graphql'
import User from '../model/User'

const userType = new GraphQLObjectType({
	name: 'User',
	fields: {
		id: {
			type: GraphQLInt
		},
		username: {
			type: GraphQLString
		},
		name: {
			type: GraphQLString
		}
	}
})

const queryType = new GraphQLObjectType({
	name: 'Query',
	fields: {
		user: {
			type: userType,
			args: {
				id: { type: GraphQLInt }
			},
			resolve: async (source, { id }) => {
				const user = await User
					.query()
					.where('id', id)
					.first()
				return user
			}
		},
		users: {
			type: new GraphQLList(userType),
			resolve: async () => {
				const users = await User.query()
				return users
			}
		}
	}
})

export default new GraphQLSchema({
	query: queryType
})
