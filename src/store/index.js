import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		value: '',
		link: '',
	},
	getters: {
		value: (state) => {
			return state.value;
		},
	},
	mutations: {
		updateValue: (state, link) => {
			state.value = link;
		},
	},
	actions: {
		updateValue({ commit }, payload) {
			commit('updateValue', payload);
		},
	},
});
