import Vue from 'vue';
import {
  BootstrapVue,
  BIconPersonFill,
  BIconArrowRightSquareFill,
  CarouselPlugin,
} from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(BootstrapVue, BIconPersonFill, BIconArrowRightSquareFill, CarouselPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
