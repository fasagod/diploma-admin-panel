import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/Info',
    name: 'Info',
    component: () => import(/* webpackChunkName: "about" */ '../components/Info.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
