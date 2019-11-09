<template>
  <div class="follow">
    <div id="search">
	<input type="text" placeholder="点击搜索" class="txt">
    <input type="submit" value="搜索" class="sub">
</div>

 <list :list="$store.state.follow" dataName="follow"></list>
    <section>
	<ul>
        <li class="te"><a href="#">点击选项快速搜索</a></li>
    </ul>

</section>

  </div>
  
</template>
<script>
import list from '../components/list'
import * as types from '../store/types.js'
export default {

  components: {
    list,
  },
  mounted(){
    this.$store.dispatch(types.UPDATE_FOLLOW)
  }
};
</script>
<style scoped>
#search{height:.65rem;border-bottom:.01rem solid #e2e2e2;justify-content:space-between;display:flex;align-items:center;}
#search .txt{width:5.15rem;height:.46rem;border-radius:.05rem;border:solid .01rem #aaaaaa;margin-left:.1rem;}
#search .sub{width:.91rem;height:.46rem;background:#09f;text-align:center;font-size:.24rem;line-height:.46rem;color:#FFF;border-radius:.05rem;border:0;margin-right:.11rem;}
section{padding-top:.09rem;}
section ul{border-top:solid .01rem #d9d9d9;}
section ul li{height:.64rem;border-bottom:solid .01rem #d9d9d9;font-size:.24rem;line-height:.64rem;color:#aaa;padding-left:.23rem;}
section ul li.te{border:none;text-align:center;}


</style>