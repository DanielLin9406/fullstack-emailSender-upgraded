export default {
  Query: {
    currentUser: (parent, arg, { req }) => {
      return req.user;
    },
    logOut: (parent, arg, { req }) => {
      req.logout();
      return true;
    }
  }
};
