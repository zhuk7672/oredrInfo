import Vue from "vue";
import Router from "vue-router";
import order from './views/order/order.vue'
import viewContent from './views/viewContent/viewContent.vue'

//二级路由
import orderContent from './views/order/orderContent.vue'
import account from './views/account/account.vue'
import customers from './views/customers/customers.vue'
import dashboard from './views/dashboard/dashboard.vue'
import products from './views/products/products.vue'
import settings from './views/settings/settings.vue'

//三级路由
import pend from './views/order/pend/pend.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'order',
      component: order,
      // default: order,
      children:[
        {
          path: '/account',
          name: 'account',
          component: account,
        },
        {
          path: '/customers',
          name: 'customers',
          component: customers,
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: dashboard,
        },
        {
          path: '/orderContent',
          name: 'orderContent',
          component: orderContent,
          children:[
            {
              path: '/pend',
              name: 'pend',
              component: pend
            }
          ],
          redirect: '/pend'
        },
        {
          path: '/products',
          name: 'products',
          component: products,
        },
        {
          path: '/settings',
          name: 'settings',
          component: settings,
        },
        {
          path: '/pend/:id',
          name: 'viewContent',
          component: viewContent,
        }
      ],
      redirect: '/orderContent'
    },
  ],
});
