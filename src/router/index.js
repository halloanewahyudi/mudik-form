import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/FormView.vue'),
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: () => import('../views/Thanks.vue'),
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/Thr.vue'),
  },
  // Tambahkan rute lain sesuai kebutuhan aplikasi Anda
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
