import axios from 'axios';


const cors = 'https://cors-anywhere-app.herokuapp.com/';
const marketEndpoint = 'https://market-api-endpoint.herokuapp.com/';


const state = {
    data: null,
    links: null,
    meta: null,
};


const getters = {
    getData: state => state.data,
    getLinks: state => state.links,
    getMeta: state => state.meta,
};


const actions = {
    ITEMS_FROM_GAMES({ commit }, appid) {
        axios.get(cors + marketEndpoint + '/item/all/' + appid)
            .then(res => {
                commit('SET_DATA', res.data.data);
                commit('SET_LINKS', res.data.links);
                commit('SET_META', res.data.meta);
            });
    },
};


const mutations = {
    SET_DATA(state, data) {
        state.data = data;
    },

    SET_LINKS(state, links) {
        state.links = links;
    },

    SET_META(state, meta) {
        state.meta = meta;
    },
};


export default {
    state,
    getters,
    actions,
    mutations,
};