import { createRouter, createWebHistory } from 'vue-router'
import aboutcomponent from '../views/about/aboutcomponent.vue'
import homecomponent from '../views/home/homecomponent.vue'
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
