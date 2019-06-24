module.exports = app => {
  app.get('/user', async (req, res) => {
    const users = await req.context.models.User.find();
    return res.send(users);
  });

  app.get('/user/:userId', async (req, res) => {
    const user = await req.context.models.User.findById(req.params.userId);
    return res.send(user);
  });
};
