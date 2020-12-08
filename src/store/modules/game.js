import axios from 'axios';


const cors = 'https://cors-anywhere-app.herokuapp.com/';
const gameEndpoint = 'https://game-api-endpoint.herokuapp.com';


const state = {
    owned: [],
    recent: [],
    game: {}
};


const getters = {
    OwnedGames: state => state.owned,
    RecentlyPlayed: state => state.recent,
    Game: state => state.game
};


const actions = {
    OWNED_GAMES({ commit }, steamid) {
        axios.get(cors + gameEndpoint + '/game/owned/' + steamid)
            .then(res => commit('SET_OWNED_GAMES', res.data));
    },

    RECENT_GAMES({ commit }, steamid) {
        axios.get(cors + gameEndpoint + '/game/recent/' + steamid)
            .then(res => commit('SET_RECENT_GAMES', res.data));
    },

    async GAME_INFO({ commit }, appid) {
        let res = await axios.get(cors + gameEndpoint + '/game/info/' + appid)
            .then(res => res.data)
        commit('SET_GAME_INFO', res);
    }
};


const mutations = {
    SET_OWNED_GAMES(state, games) {
        state.owned = games;
    },

    SET_RECENT_GAMES(state, games) {
        state.recent = games;
    },

    SET_GAME_INFO(state, game) {
        state.game = game;
    }
};


export default {
    state,
    getters,
    actions,
    mutations,
};