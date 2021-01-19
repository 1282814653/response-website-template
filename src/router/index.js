import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  // 首页
  {
    path: '/index',
    name: 'Index',
    meta: { title: "首页" },
    component: Home
  },
  // 关于
  {
    path: '/about',
    name: 'About',
    redirect: "/about/company",
    meta: { title: "关于" },
    component: () => import(/* webpackChunkName: "about" */ '../views/About/index.vue'),
    children: [
      {
        path: "company",
        name: "Company",
        meta: { title: "关于公司" },
        component: () => import("../views/About/component/com_one.vue")
      },
      {
        path: "us",
        name: "Us",
        meta: { title: "关于我们" },
        component: () => import("../views/About/component/com_two.vue")
      }
    ]
  },
  // 地址
  {
    path: '/address',
    name: 'Address',
    meta: { title: "地址" },
    component: () => import(/* webpackChunkName: "address" */ '../views/Address/index.vue')
  },
  // 其他
  {
    path: '/other',
    name: 'Other',
    meta: { title: "其他" },
    component: () => import(/* webpackChunkName: "other" */ '../views/Other/index.vue')
  },
  // 联系
  {
    path: '/contact',
    name: 'Contact',
    meta: { title: "联系" },
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
