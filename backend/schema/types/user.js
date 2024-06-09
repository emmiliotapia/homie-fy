// backend/schema/types/user.js
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = graphql;
const BalanceType = require('./balance');
const TaskType = require('./task');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    balance: { type: BalanceType },
    tasks: {
      type: new GraphQLList(TaskType),
      resolve(parent, args) {
        return parent.tasks;
      }
    }
  })
});

module.exports = UserType;
