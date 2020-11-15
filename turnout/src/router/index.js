import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import Signin from '../components/Signin.vue'
import SignUp from '../components/SignUp.vue'

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
  },
  {
    path:'/SignUp',
    name:'SignUp',
    component:SignUp
  }
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
