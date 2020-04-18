import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Home',
      component: () => import('@/page/home')
    },
    {
      path: '/my',
      name: 'My',
      component: () => import('@/page/my')
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('@/page/order')
    },
    {
      path: '/menu',
      name: 'Menu',
      component: () => import('@/page/menu')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/page/test')
    }
  ]
});
