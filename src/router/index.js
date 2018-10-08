import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import childOne from '@/pages/childOne'
import childTwo from '@/pages/childTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/HelloWorld',
    },
    {
      path: '/HelloWorld',
      component: HelloWorld,
      redirect: '/HelloWorld/childOne',
      children: [
        {
          path: '/HelloWorld/childOne',
          name: 'childOne',
          component: childOne,
        },
        {
          path: '/HelloWorld/childTwo',
          name: 'childTwo',
          component: childTwo,
        },
      ],
    }
  ]
})
