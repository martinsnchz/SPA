import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Galerie from '@/components/Galerie'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/galerie',
      name: 'Galerie',
      component: Galerie
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
