<template>
  <div class="home">
    <slider :banner='$store.state.banner'></slider>
    <list :list="$store.state.home" dataName="home"></list>
  </div>
  
</template>
<script >

import list from "../components/list";
import slider from "../components/slider";
import * as types from '../store/types.js'
import {mapActions} from 'vuex'
export default {
  components: {
    list,
    slider,
  },
  mounted(){
   this.$store.dispatch(types.UPDATE_HOME)
   this.UPDATE_BANNER()
  },
 methods:mapActions([types.UPDATE_BANNER])
};
</script>
<style>
nav{height:.86rem;display:flex;justify-content:space-around;background:#fff;border-bottom:.01rem solid #dedfe0;text-align:center;}
nav a{font-size:.32rem;line-height: .74rem;color:#818181;width:.97rem;margin-top:.06rem;}
nav a:active{border-bottom:.06rem solid #12b7f5;}
</style>