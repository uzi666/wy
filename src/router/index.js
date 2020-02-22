import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: '登录',
      component: () => import("@/pages/login")
    },
    {
      path: "/index",
      name: "首页",
      component: () => import("@/pages/index")
    },
    {
      path: "/inventory",
      name: "库存",
      component: () => import("@/pages/inventory")
    },
    {
      path: "/work",
      name: "工作",
      component: () => import("@/pages/work")
    },
    {
      path: "/cost",
      name: "费用",
      component: () => import("@/pages/cost")
    },
    {
      path: "/procurement",
      name: "采购",
      component: () => import("@/pages/procurement")
    },
    {
      path: "/vehicle",
      name: "车辆",
      component: () => import("@/pages/vehicle")
    },
    {
      path: "/chapter",
      name: "公章",
      component: () => import("@/pages/chapter")
    },
    {
      path: "/other",
      name: "其他",
      component: () => import("@/pages/other")
    },
  ]
})
