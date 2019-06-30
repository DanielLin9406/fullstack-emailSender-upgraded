export default {
  Query: {
    currentUser: (parent, arg, { user }) => {
      return user;
    },
    logOut: (parent, arg, { req }) => {
      req.logout();
      return true;
    }
  }
};
