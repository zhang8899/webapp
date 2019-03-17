import Vue from 'vue'
import Router from 'vue-router' // 引入路由模块
import WgIndexPage from '@/page/WgIndexPage'
import WgListPage from '@/page/WgListPage'
import WgLoginPage from '@/page/WgLoginPage'

Vue.use(Router)

export default new Router({
  //编写路由规则
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
    },
    {
      path:"/login",
      name:"WgLoginPage",
      component:WgLoginPage
    }
  ]
})
