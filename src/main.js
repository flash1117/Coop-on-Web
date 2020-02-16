import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import {router} from "./routes/route";
import store from "./stores/index"

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
