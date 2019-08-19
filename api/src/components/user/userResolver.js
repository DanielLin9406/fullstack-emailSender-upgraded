export default {
  Query: {
    currentUser: (parent, arg, { req, user }) => {
      return user;
    },
    logOut: (parent, arg, { req, user }) => {
      req.logout();
      return user;
    }
  }
};
