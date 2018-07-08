import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vuextest from '@/components/storeTest'
import vuextest2 from '@/components/storetest2'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/vuextest",
      component:vuextest,
      name:"vuextest"
    },{
      path:"/vuextest2",
      component:vuextest2,
      name:"vuextest2"
    }
  ],
  mode:'history'
})
