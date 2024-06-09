// backend/schema/types/balance.js
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt } = graphql;

const BalanceType = new GraphQLObjectType({
  name: 'Balance',
  fields: () => ({
    experiencePoints: { type: GraphQLInt },
    monetaryRewards: { type: GraphQLInt }
  })
});

module.exports = BalanceType;
