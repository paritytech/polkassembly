const graphql = require('graphql');
const { User } = require('../db/schema');
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = graphql;

const userType =  new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLInt,
    },
    username: {
      type: GraphQLString,
    }
  }
});

const queryType =  new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: async (source, {id}) => {
        const user = await User
          .query()
          .where('id', id)
          .first()
        return user;
      }
    },
    users: {
      type: new GraphQLList(userType),
      resolve: async () => {
        const users = await User.query();
        return users;
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType
})

module.exports = schema