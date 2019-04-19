import Loadable from "../components/Loadable/Loadable";

const pagePaths = {
  LANDING: '/',
  LOGIN: '/login',
  DASHBOARD: '/surveys',
  SURVEYNEW:'/surveys/new'
}

const pagesInfo = [
  {
    path: pagePaths.LOGIN,
    component: Loadable({
      loader: () => import(/* webpackChunkName: "login" */ "./Login/Container"),
      modules: ["login"]
    }),
    authType: 'unAuthed'
  },
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
    // path: pagePaths.SURVEYNEW,
    path: '/surveys/new',
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