
const state = {
    edit: false,
    twoFactorAuth: false
};


const getters = {
    showEditForm: state => state.edit,
    showAuthForm: state => state.twoFactorAuth,
};


const actions = {
    TOGGLE_EDIT_FORM({ commit }, show = false) {
        commit('SET_EDIT', show);
    },

    TOGGLE_AUTH_FORM({ commit }, show = false) {
        commit('SET_AUTH', show);
    }
};


const mutations = {
    SET_EDIT(state, show) {
        state.edit = show;
    },

    SET_AUTH(state, show) {
        state.edit = show;
    }
};


export default {
    state,
    getters,
    actions,
    mutations,
};