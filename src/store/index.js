import Vuex from 'vuex';
import Vue from 'vue';
import persistedstate from "vuex-persistedstate";
import auth from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth
    },
    plugins: [
        persistedstate()
    ]
});