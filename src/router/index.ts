import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Sensors from '../components/Sensors.vue';

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
  {
    path: '/Sensors',
    name: 'sensors',
    component: Sensors,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
