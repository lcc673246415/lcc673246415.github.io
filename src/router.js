import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Judge from './views/Judge'
import Many from './views/Many'
import Single from './views/Single'
export default new Router({
  routes: [
    {
      path: '/judge',
      name: 'judge',
      component: Judge
    },
    {
      path: '/many',
      name: 'many',
      component: Many
    },
    {
      path: '/single',
      name: 'single',
      component: Single
    },
    {
      path: '*',
      redirect:"/single"
    },
    
  ]
})
