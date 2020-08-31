import Vue from 'vue';

import App from './App.vue';
import VueClipboard from 'vue-clipboard2';
import titleMixin from './utils/title';
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;
Vue.mixin(titleMixin);
Vue.use(VueClipboard);
Vue.use(Vuelidate);

new Vue({
	render: (h) => h(App),
	// store,
}).$mount('#app');
