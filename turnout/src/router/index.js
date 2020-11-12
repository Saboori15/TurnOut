import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import Signin from '../components/Signin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Signin',
    name: 'Signin',
    component:Signin
  }
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
