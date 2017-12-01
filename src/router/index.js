import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contacto from '@/components/Contacto'
import Programas from '@/components/Programas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Contacto',
      name: 'Contacto',
      component: Contacto
    },
    {
      path: '/Programas',
      name: 'Programas',
      component: Programas
    }
  ]
})
