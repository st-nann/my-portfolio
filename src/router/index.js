import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      meta: { nolayout: true },
      component: function (reslove) {
        return require(['@/pages/EnterSite'], reslove)
      }
    },
    {
      path: '/AboutMe',
      meta: {nolayout: false},
      component: function (reslove) {
        return require(['@/pages/MainTitle/AboutMe'], reslove)
      }
    }
  ]
})

export default router
