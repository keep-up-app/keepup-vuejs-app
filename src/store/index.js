import Vue from 'vue';
import Vuex from 'vuex';
import persistedstate from "vuex-persistedstate";
import user from './modules/user';
import game from './modules/game';
import util from './modules/util';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        game,
        util
    },
    plugins: [
        persistedstate()
    ]
});