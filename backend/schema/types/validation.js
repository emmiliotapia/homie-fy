// backend/schema/types/validation.js
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLBoolean } = graphql;

const ValidationType = new GraphQLObjectType({
  name: 'Validation',
  fields: () => ({
    validatedBy: { type: GraphQLID },
    isValid: { type: GraphQLBoolean }
  })
});

module.exports = ValidationType;
