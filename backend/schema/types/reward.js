// backend/schema/types/reward.js
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt } = graphql;

const RewardType = new GraphQLObjectType({
  name: 'Reward',
  fields: () => ({
    experiencePoints: { type: GraphQLInt },
    monetaryReward: { type: GraphQLInt }
  })
});

module.exports = RewardType;
