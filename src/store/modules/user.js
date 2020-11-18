import axios from 'axios';
import Vue from 'vue';


const cors = 'https://cors-anywhere.herokuapp.com/';
const loginEndpoint = 'https://login-api-endpoint.herokuapp.com';
const steamEndpoint = 'https://steam-api-endpoint.herokuapp.com';
const registerEndpoint = 'https://register-api-endpoint.herokuapp.com';
const userEndpoint = 'https://user-api-endpoint.herokuapp.com';


const state = {
    user: null,
    steamid: null,
    steamProfile: null, 
};


const getters = {
    isAuthenticated: state => !!state.user,
    isSteamAuthenticated: state => !!state.steamProfile,
    User: state => state.user,
    Steamid: state => state.steamid,
    SteamProfile: state => state.steamProfile
};


const actions = {
    async REGISTER({ commit }, payload) {
        let res = await axios.post(cors + registerEndpoint, payload);
        let user = res.data.data;
        Vue.$cookies.set('token', user['token']);
        commit('SET_USER', user);
    },

    async LOGIN({ commit, dispatch }, payload) {
        let res = await axios.post(cors + loginEndpoint, payload);
        let user = res.data.data;
        Vue.$cookies.set('token', user['token']);
        if (user['steamid']) dispatch('STEAM_PROFILE', user['steamid']);
        commit('SET_USER', user);
    },
    
    LOGOUT({ commit }) {
        Vue.$cookies.remove('token');
        commit('SET_USER', null);
        commit('SET_STEAMID', null);
        commit('SET_STEAM_PROFILE', null);
    },
    
    LINK_STEAM({ commit, dispatch, getters }, steamid) {
        commit('SET_STEAMID', steamid);
        dispatch('STEAM_PROFILE', steamid);
        axios.put(cors + userEndpoint + '/user/update', {
            find: { email: getters.User['email'] },
            with: { steamid: steamid }
        }, { headers: { 'Authorization': getters.User['token'] } }).then(res => commit('SET_USER', res.data));
    },

    STEAM_PROFILE({ commit }, steamid) {
        axios.get(cors + steamEndpoint + '/steam/user/profile/' + steamid)
            .then(res => commit('SET_STEAM_PROFILE', res.data));
    }
};


const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },

    SET_STEAMID(state, steamid) {
        state.steamid = steamid;
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