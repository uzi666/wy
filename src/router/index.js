import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: '首页',
      component: () => import("@/pages/login")
    },
    {
      path: "/index",
      name: "index",
      component: () => import("@/pages/index")
    },
  ]
})
