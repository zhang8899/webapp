import Vue from 'vue'
import Router from 'vue-router'
import WgIndexPage from '@/page/WgIndexPage'
import WgListPage from '@/page/WgListPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WgIndexPage',
      component: WgIndexPage
    },
    { 
      path: '/list',  
      name: 'WgListPage',
      component: WgListPage 
    }
  ]
})
