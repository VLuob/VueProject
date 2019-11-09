import axios from 'axios'
import Vue from 'vue'
import vm from '../main'
import store from '../plugins/vuex'
axios.interceptors.request.use(function(config){
 store.commit('VIEW_LOADING',true)
     return config
    },function(error){
     return Promise.reject(error)
    }
   )
   //在 response 拦截器实现
   
   axios.interceptors.response.use(function(response){
      store.commit('VIEW_LOADING',false)
     return response
    },function(error){
     return Promise.reject(error)
    }
   )
Vue.prototype.axios=axios
window.axios=axios 