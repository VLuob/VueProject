import Vue from 'vue'
import App from './App.vue'
import "./assets/js/font"
import "./assets/css/base.css"
import router from './plugins/router'
import './plugins/axios'
import server from './config/server'
import 'animate.css'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.prototype.baseUrl= server.baseUrl
import filters from './filters'
for(var key in filters){
  Vue.filter(key,filters[key])
}

import './plugins/axios'
import store from '../src/plugins/vuex'
let local = window.localStorage.getItem('1909_app')
if(local){
  store.commit('UPDATE_USER',JSON.parse(local))
}
let vm = new Vue({
  render: h => h(App),
  router:router,
  store,
}).$mount('#app')
export default vm 
