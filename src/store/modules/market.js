import axios from 'axios';


const cors = 'https://cors-anywhere-app.herokuapp.com/';
const marketEndpoint = 'https://market-api-endpoint.herokuapp.com/';


const state = {
    next: null,
    previous: null,
    first: null,
    last: null,
    items: []
};


const getters = {
    getNextPage: state => state.next,
    getPreviousPage: state => state.previous,
    getFirstPage: state => state.first,
    getLastPage: state => state.last,
    MarketItems: state => state.items
};


const actions = {
    ITEMS_FROM_GAMES({ commit }, appid) {
        axios.get(cors + marketEndpoint + '/item/all/' + appid)
            .then(res => {
                commit('SET_GAME_ITEMS', res.data.data);
                commit('SET_FIRST_PAGE', res.data.links.first);
                commit('SET_LAST_PAGE', res.data.links.last);
                commit('SET_NEXT_PAGE', res.data.next);
                commit('SET_PREVIOUS_PAGE', res.data.previous);
            });
    },
};


const mutations = {
    SET_GAME_ITEMS(state, items) {
        state.items = items;
    },

    SET_FIRST_PAGE(state, page) {
        state.first = page;
    },

    SET_LAST_PAGE(state, page) {
        state.last = page;
    },

    SET_NEXT_PAGE(state, page) {
        state.next = page;
    },

    SET_PREVIOUS_PAGE(state, page) {
        state.previous = page;
    },
};


export default {
    state,
    getters,
    actions,
    mutations,
};