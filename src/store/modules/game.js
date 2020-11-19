import axios from 'axios';


const cors = 'https://cors-anywhere-app.herokuapp.com/';
const gameEndpoint = 'https://game-api-endpoint.herokuapp.com';


const state = {
    owned: [],
    recent: []
};


const getters = {
    OwnedGames: state => state.owned,
    RecentlyPlayed: state => state.recent
};


const actions = {
    OWNED_GAMES({ commit }, steamid) {
        axios.get(cors + gameEndpoint + '/game/owned/' + steamid)
            .then(res => commit('SET_OWNED_GAMES', res.data));
    },

    RECENT_GAMES({ commit }, steamid) {
        axios.get(cors + gameEndpoint + '/game/recent/' + steamid)
            .then(res => commit('SET_RECENT_GAMES', res.data));
    }
};


const mutations = {
    SET_OWNED_GAMES(state, games) {
        state.owned = games;
    },

    SET_RECENT_GAMES(state, games) {
        state.recent = games;
    }
};


export default {
    state,
    getters,
    actions,
    mutations,
};