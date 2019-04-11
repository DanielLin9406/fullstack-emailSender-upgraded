import Loadable from "../components/Loadable/Loadable";

const pagePaths = {
  INDEX: '/',
  LOGIN: '/login',
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
    path: pagePaths.INDEX,
    component: Loadable({
      loader: () => import(/* webpackChunkName: "login" */ "./Home/Container"),
      modules: ["home"]
    }),
    authType: 'general'
  }
]

export {
  pagePaths,
  pagesInfo
}