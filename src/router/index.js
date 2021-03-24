import Vue from 'vue'
import VueRouter from 'vue-router'
import Course from '../components/Course.vue'
import Login from '../components/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/course',
    name: 'Course',
    component: Course
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
