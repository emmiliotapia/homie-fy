// backend/schema/types/task.js
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const RewardType = require('./reward');
const ValidationType = require('./validation');

const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    assignedTo: { type: GraphQLID },
    status: { type: GraphQLString },
    reward: { type: RewardType },
    validation: { type: ValidationType }
  })
});

module.exports = TaskType;
