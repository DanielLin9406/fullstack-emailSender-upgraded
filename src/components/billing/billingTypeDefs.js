const billingTypeDefs = `
  type Mutation {
    createCredit(tokenId:String!): User
  }
  `;

// Export user schema type definition SDL
export default billingTypeDefs;
