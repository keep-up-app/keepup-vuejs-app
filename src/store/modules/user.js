import axios from 'axios';
import Vue from 'vue';


const cors = 'https://cors-anywhere-app.herokuapp.com/';
const loginEndpoint = 'https://login-api-endpoint.herokuapp.com';
const steamEndpoint = 'https://steam-api-endpoint.herokuapp.com';
const registerEndpoint = 'https://register-api-endpoint.herokuapp.com';
const userEndpoint = 'https://user-api-endpoint.herokuapp.com';


const state = {
    user: null,
    steamProfile: null, 
};


const getters = {
    isAuthenticated: state => !!state.user,
    isSteamAuthenticated: state => !!state.user.steamid,
    User: state => state.user,
    SteamProfile: state => state.steamProfile
};


const actions = {
    async REGISTER({ commit }, payload) {
        let res = await axios.post(cors + registerEndpoint, payload);
        let user = res.data;
        Vue.$cookies.set('Authorization', user['token']);
        commit('SET_USER', user);
    },

    async LOGIN({ commit }, payload) {
        let res = await axios.post(cors + loginEndpoint, payload);
        let user = res.data;
        Vue.$cookies.set('Authorization', user['token']);
        commit('SET_USER', user);
    },

    async DELETE({ getters, dispatch }) {
        let res = await axios.delete(cors + userEndpoint + '/user/destroy', {
            _id: getters.User['_id']
        });
        dispatch('LOGOUT');
        return res.data.message;
    },

    async UPDATE({ commit, getters }, payload) {
        let res = await axios.put(cors + userEndpoint + '/user/update', {
            find: { _id: getters.User['_id'] },
            with: payload
        });
        commit('SET_USER', res.data);
        commit('SET_STEAM_PROFILE', res.data.steamid);
    },
    
    LOGOUT({ commit, dispatch }) {
        Vue.$cookies.remove('Authorization');
        commit('SET_USER', null);
        commit('SET_STEAM_PROFILE', null);
        commit('SET_OWNED_GAMES', []);
        commit('SET_RECENT_GAMES', []);
        dispatch('TOGGLE_EDIT_FORM');
    },

    STEAM_PROFILE({ commit }, steamid) {
        axios.get(cors + steamEndpoint + '/steam/user/profile/' + steamid)
            .then(res => commit('SET_STEAM_PROFILE', res.data))
            .catch(() => commit('SET_STEAM_PROFILE', null));
    },
};


const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },

    SET_STEAM_PROFILE(state, profile) {
        state.steamProfile = profile
    }
};


export default {
    state,
    getters,
    actions,
    mutations,
};