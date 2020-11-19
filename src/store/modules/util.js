
const state = {
    edit: false, 
};


const getters = {
    showEditForm: state => state.edit
};


const actions = {
    TOGGLE_EDIT_FORM({ commit }, show = false) {
        commit('SET_EDIT', show);
    }
};


const mutations = {
    SET_EDIT(state, show) {
        state.edit = show;
    }
};


export default {
    state,
    getters,
    actions,
    mutations,
};