import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from "@/components/home"
import daikuan from "@/components/daikuan"
// import equities from "@/components/equities"
// import loans from "@/components/loans"
// import loansDetail from "@/components/loansDetail"
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/daikuan',
      name: 'daikuan',
      component: daikuan
    },
  ]
})
