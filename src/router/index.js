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
      path: '/Skill',
      meta: {nolayout: false},
      component: function (reslove) {
        return require(['@/pages/MainTitle/Skill'], reslove)
      }
    },
    {
      path: '/Portfolio',
      meta: {nolayout: false},
      component: function (reslove) {
        return require(['@/pages/MainTitle/Portfolio'], reslove)
      }
    },
    {
      path: '/Portfolio/Design',
      meta: {nolayout: false},
      component: function (reslove) {
        return require(['@/pages/MainTitle/Portfolio'], reslove)
      }
    },
    {
      path: '/Portfolio/Coding',
      meta: {nolayout: false},
      component: function (reslove) {
        return require(['@/pages/MainTitle/Portfolio'], reslove)
      }
    },
    {
      path: '/Contacts',
      meta: {nolayout: false},
      component: function (reslove) {
        return require(['@/pages/MainTitle/Contacts'], reslove)
      }
    },
    {
      path: '*',
      meta: {nolayout: true},
      component: function (reslove) {
        return require(['@/pages/Error/404'], reslove)
      }
    }
  ]
})

export default router
