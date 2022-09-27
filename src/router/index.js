import { createRouter, createWebHistory } from 'vue-router'
import aboutcomponent from '../views/about/aboutcomponent.vue'
import homecomponent from '../views/home/homecomponent.vue'
import servicecoponent from '../views/service/service.vue'
const routes = [
  {
    path:'/about',
    name:'about',
    component:aboutcomponent
  } , 
  {
    path:'/',
    name:'home',
    component:homecomponent
  },
  {
    path:'/service',
    name:'service',
    component:servicecoponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
