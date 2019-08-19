import Loadable from '../components/Loadable/Loadable';

const paths = {
  LANDING: '/',
  SURVEY: '/surveys',
  SURVEYNEW: '/surveys/new'
};

const pagesInfo = [
  {
    path: paths.LANDING,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "landing" */ './Landing/Container'),
      modules: ['landing']
    }),
    authType: 'general'
  },
  {
    path: paths.SURVEY,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "survey" */ './Survey/Container'),
      modules: ['survey']
    }),
    authType: 'authed'
  },
  {
    path: paths.SURVEYNEW,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "surveynew" */ './SurveyNew/Container'),
      modules: ['surveynew']
    }),
    authType: 'general'
  }
];

export { paths, pagesInfo };
