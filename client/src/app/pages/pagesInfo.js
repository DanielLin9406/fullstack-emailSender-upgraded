import Loadable from '../components/Loadable/Loadable';

const pagePaths = {
  LANDING: '/',
  SURVEY: '/surveys',
  SURVEYNEW: '/surveys/new'
};

const pagesInfo = [
  {
    path: pagePaths.LANDING,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "landing" */ './Landing/Container'),
      modules: ['landing']
    }),
    authType: 'general'
  },
  {
    path: pagePaths.SURVEY,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "survey" */ './Survey/Container'),
      modules: ['survey']
    }),
    authType: 'authed'
  },
  {
    path: pagePaths.SURVEYNEW,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "surveynew" */ './SurveyNew/Container'),
      modules: ['surveynew']
    }),
    authType: 'authed'
  }
];

export { pagePaths, pagesInfo };
