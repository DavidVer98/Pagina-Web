import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollReveal from 'vue-scroll-reveal';

import VueCarousel from 'vue-carousel';
import { rtdbPlugin } from 'vuefire'

Vue.use(rtdbPlugin)
Vue.use(VueCarousel);
Vue.use(VueScrollReveal);



Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
  create:() => {
    store.dispatch("autologin")
  }
}).$mount('#app')
