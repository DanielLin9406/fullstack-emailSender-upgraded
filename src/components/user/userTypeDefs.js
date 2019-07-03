const userTypeDefs = `
  type Query {
    currentUser: User
    logOut: User
  }
  type User {
    googleId: ID!
    credits: Float
  }`;

// Export user schema type definition SDL
export default userTypeDefs;
