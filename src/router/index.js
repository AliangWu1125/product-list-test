import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('@/views/Dashboard.vue'),
          meta: { title: '首頁', affix: true },
        },
        {
          path: 'products',
          name: 'ProductList',
          component: () => import('@/views/ProductListView.vue'),
          meta: { title: '商品列表' },
        },
        {
          path: 'orders',
          name: 'OrderList',
          component: () => import('@/views/OrderList.vue'),
          meta: { title: '訂單列表' },
        },
      ],
    },
  ],
})

export default router
