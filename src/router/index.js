import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home'),
  },
  {
    path: '/cards/:category',
    props: true,
    name: 'Cards',
    component: () => import(/* webpackChunkName: "cards" */ '../views/Cards'),
  },
  {
    path: '/raspisanie/:category',
    props: true,
    name: 'Raspisanie',
    component: () =>
      import(/* webpackChunkName: "raspisanie" */ '../views/Raspsisanie'),
  },
  {
    path: '/partners/:category',
    props: true,
    name: 'Partners',
    component: () =>
      import(/* webpackChunkName: "partners" */ '../views/Partners'),
  },
  {
    path: '/antidoping/:category',
    props: true,
    name: 'Antidoping',
    component: () =>
      import(/* webpackChunkName: "partners" */ '../views/Antidoping'),
  },
  {
    path: '/calendar/:category',
    props: true,
    name: 'Calendar',
    component: () =>
      import(/* webpackChunkName: "calendar" */ '../views/Calendar'),
  },
  {
    path: '/rules/:category',
    props: true,
    name: 'Rules',
    component: () => import(/* webpackChunkName: "rules" */ '../views/Rules'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
