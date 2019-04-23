import Loadable from "../components/Loadable/Loadable";

const pagePaths = {
  LANDING: '/',
  DASHBOARD: '/surveys',
  SURVEYNEW:'/surveys/new'
}

const pagesInfo = [
  {
    path: pagePaths.LANDING,
    component: Loadable({
      loader: () => import(/* webpackChunkName: "landing" */ "./Landing/Container"),
      modules: ["landing"]
    }),
    authType: 'general'
  },
  {
    path: pagePaths.DASHBOARD,
    component: Loadable({
      loader: () => import(/* webpackChunkName: "dashboard" */ "./Dashboard/Container"),
      modules: ["dashboard"]
    }),
    authType: 'general',
  },
  {
    path: pagePaths.SURVEYNEW,
    component: Loadable({
      loader: () => import(/* webpackChunkName: "surveynew" */ "./SurveyNew/Container"),
      modules: ["surveynew"]
    }),
    authType: 'general'
  }
]

export {
  pagePaths,
  pagesInfo
}