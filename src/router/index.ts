import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Users from '../views/Users.vue';
import CurrentUser from '../views/CurrentUser.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { name: 'users', path: '/', component: Users },
  { name: 'currentUser', path: '/users/:id', component: CurrentUser },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
