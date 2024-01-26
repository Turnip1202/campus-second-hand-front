import { createRouter, createWebHashHistory } from 'vue-router';
type RouteRecordRaw = import('vue-router').RouteRecordRaw;

const routers: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main/',
    name: 'main',
    component: () => import('@/views/main//main.vue'),
    children: [
      {
        path: '',
        name: 'commodity',
        redirect: '/main/commodityCategory',
      },
      {
        path: 'commodityCategory',
        name: 'commodityCategory',
        component: () =>
          import('@/views/main/commodityCategory/commodity-category.vue'),
      },
      {
        path: 'publish',
        name: 'publish',
        component: () =>
          import('@/views/main/articlePublishing/article-publishing.vue'),
      },
    ],
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routers,
});

export default router;
