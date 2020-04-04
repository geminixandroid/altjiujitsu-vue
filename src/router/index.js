import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/', name: 'Home', component:() => import (/* webpackChunkName: "home" */  '../views/Home')
    }
    ,
    {
        path: '/cards/:category', props:true,name: 'Cards',component:() => import (/* webpackChunkName: "cards" */  '../views/Cards')
    },
    {
        path: '/raspisanie/:category', props:true,name: 'Raspisanie',component:() => import (/* webpackChunkName: "raspisanie" */  '../views/Raspsisanie')
    },
    {
        path: '/partners/:category', props:true,name: 'Partners',component:() => import (/* webpackChunkName: "partners" */  '../views/Partners')
    },
]

const router = new VueRouter({
    routes
})

export default router
