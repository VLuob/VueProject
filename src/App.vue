<template>
  <div id="app">
    <!-- s -->
    <loading v-if='$store.state.bLoading'></loading>
    <Header v-if="bNav"></Header>
    <transition enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    mode="out-in"
    >
      <router-view></router-view>
    </transition>
   
    <Footer v-if="bFoot"></Footer>
  </div>
</template>

<script>
import * as types from '../src/store/types'
import Header from "./components/Header";
import Footer from "./components/Footer";
import loading from "./components/loading";
import {mapState} from 'vuex'
export default {
  name: "app",
  components: {
    Header,
    Footer,
    loading
  },
  watch: {
    $route: {
      handler(nextRoute, prevRoute) {
        let path = nextRoute.path;
        if (/home|follow|column/.test(path)) {
          this.$store.commit('VIEW_NAV',true)
          this.$store.commit('VIEW_FOOT',true)
        }
        if (/user|map/.test(path)) {
          this.$store.commit('VIEW_NAV',false)
          this.$store.commit('VIEW_FOOT',true)
        }
        if (/login|detail|reg/.test(path)) {
          this.$store.commit('VIEW_NAV',false)
          this.$store.commit('VIEW_FOOT',false)
        }
      },
      immediate: true
    }
  },
  computed:mapState([
    'bNav','bFoot'
  ])
};
</script>

<style>
</style>
