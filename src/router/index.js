import Vue from 'vue'
import Router from 'vue-router'

import AppHelloAirBI from '@/views/AppHelloAirBI'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/', component: AppHelloAirBI, name: '/'}
  ]
})

export default router
