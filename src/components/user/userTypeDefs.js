const userTypeDefs = `
  type Query {
    currentUser: User
    logOut: Boolean
  }
  type User {
    googleId: ID!
    credits: Float
  }`;

// Export user schema type definition SDL
export default userTypeDefs;
