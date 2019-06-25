import apiRouter from '../../libs/router/enrichRouter';

apiRouter.get('/current_user', (req, res) => {
  res.send(req.user);
});

apiRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

export default apiRouter;
