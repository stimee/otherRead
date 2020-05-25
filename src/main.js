import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueBetterScroll from 'components/scroll/BScroll.vue'
import 'vant/lib/index.css';
import './plugins/vant';
import './http';

Vue.use(VueRouter)
Vue.component('VueBetterScroll', VueBetterScroll)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
