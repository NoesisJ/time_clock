import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/timeClock",
    name:"timeClock",
    component:()=>import("@/views/timeClock.vue")
  },
  {
    path:"/sihuo",
    name:"sihuo",
    component:()=>import("@/views/sihuo.vue")

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
