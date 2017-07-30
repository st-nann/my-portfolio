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
    },
    {
      path: '/Experience',
      meta: {nolayout: false},
      component: function (reslove) {
        return require(['@/pages/MainTitle/Experience'], reslove)
      }
    },
    {
      path: '/Works',
      meta: {nolayout: false},
      component: function (reslove) {
        return require(['@/pages/MainTitle/Works'], reslove)
      }
    },
    {
      path: '/Works/Design',
      meta: {nolayout: false},
      component: function (reslove) {
        return require(['@/pages/MainTitle/Works'], reslove)
      }
    },
    {
      path: '/Works/Coding',
      meta: {nolayout: false},
      component: function (reslove) {
        return require(['@/pages/MainTitle/Works'], reslove)
      }
    },
    {
      path: '/Contacts',
      meta: {nolayout: false},
      component: function (reslove) {
        return require(['@/pages/MainTitle/Contacts'], reslove)
      }
    }
  ]
})

export default router
