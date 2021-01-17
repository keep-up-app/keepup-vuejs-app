import axios from 'axios';


const marketEndpoint = 'https://market-api-endpoint.herokuapp.com';


const state = {
    data: null,
    links: null,
    meta: null,
};


const getters = {
    getItemData: state => state.data,
    getItemLinks: state => state.links,
    getItemMeta: state => state.meta,
};


const actions = {
    ITEMS_FROM_GAME({ commit }, data) {
        return new Promise((resolve, reject) => {
            const { appid, page } = data;
            axios.get(marketEndpoint + '/item/all/' + appid + '?page=' + (page || 1))
            .then(res => {
                if (res.data.error) {
                    commit('SET_ITEM_DATA', []);
                    commit('SET_ITEM_LINKS', null);
                    commit('SET_ITEM_META', null);                        
                    return reject(res.data.error);
                }
                commit('SET_ITEM_DATA', res.data.data);
                commit('SET_ITEM_LINKS', res.data.links);
                commit('SET_ITEM_META', res.data.meta);
                return resolve();
            });
        });
    },
};


const mutations = {
    SET_ITEM_DATA(state, data) {
        state.data = data;
    },

    SET_ITEM_LINKS(state, links) {
        state.links = links;
    },

    SET_ITEM_META(state, meta) {
        state.meta = meta;
    },
};


export default {
    state,
    getters,
    actions,
    mutations,
};