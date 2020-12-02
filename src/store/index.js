import Vue from 'vue';
import Vuex from 'vuex';
import persistedstate from "vuex-persistedstate";
import user from './modules/user';
import game from './modules/game';
import util from './modules/util';
import market from './modules/market';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        game,
        market,
        util
    },
    plugins: [
        persistedstate()
    ]
});