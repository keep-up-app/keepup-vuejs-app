import axios from 'axios';
import Vue from 'vue';

const steamAuth = require("../util/steamAuth");

const cors = 'https://cors-anywhere.herokuapp.com/';
const loginEndpoint = 'https://login-api-endpoint.herokuapp.com';
const registerEndpoint = 'http://register-api-endpoint.herokuapp.com';


const state = {
    user: null,
};


const getters = {
    isAuthenticated: state => !!state.user,
    User: state => state.user,
};


const actions = {
    async REGISTER({ dispatch }, payload) {
        await axios.post(cors + registerEndpoint, payload);
        await dispatch('LOGIN', {
            'email': payload.email,
            'password': payload.password.first
        });
    },

    async LOGIN({ commit }, payload) {
        let res = await axios.post(cors + loginEndpoint, payload);
        let user = res.data.data;
        Vue.$cookies.set('token', user['token']);
        await commit('SET_USER', user);
    },
    
    async LOGOUT({ commit }) {
        Vue.$cookies.remove('token');
        await commit('SET_USER', null);
    },
    
    async LINK_STEAM({ commit }) {
        
        console.log('inauth');
        
        let profile = await axios.get(steamAuth.getRedirectUrl());
        
        commit('setSteamid', profile);
    }
};


const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
};


export default {
    state,
    getters,
    actions,
    mutations,
};