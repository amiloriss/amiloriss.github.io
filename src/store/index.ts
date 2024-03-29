import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users';
import posts from './modules/posts';
import albums from './modules/albums';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    posts,
    albums,
  },
});
