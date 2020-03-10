import Vuex from 'vuex';
import Vue from 'vue';
import favorites from './modules/favorites';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    favorites,
  },
});
