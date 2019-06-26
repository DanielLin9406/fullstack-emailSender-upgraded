export default {
  Query: {
    current_user: (parent, args, { user }) => {
      return user;
    }
  }
};
