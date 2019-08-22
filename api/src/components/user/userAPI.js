import apiRouter from '../../libs/router/enrichRouter';

apiRouter.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

apiRouter.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

export default apiRouter;
