<template>
<main>
	<ul>
    	<li v-for='item of column' :key='item._id'>
        <router-link :to="'/detail/' + item._id +'?dataName=column'">
        	<i><img :src="baseUrl + item.detail.icon" alt=""/></i>
            <div class="men">
            	<h3>{{item.title}}</h3>
                <p>{{item.des}}</p>
            </div>
            <span>{{item.time | data}}</span>
             </router-link>
        </li>
    </ul>
</main>
</template>
<script>
import { mapGetters } from 'vuex'
import * as types from '../store/types'
export default {
  mounted(){
    this.$store.dispatch('UPDATE_COLUMN')
  },
  computed:mapGetters([
    'column'
  ])
}
</script>>
<style scoped>
main{background:#f1f1f1;}
main ul{align-items:center;}
main ul li{height:1.41rem;background:#FFF;display:flex;position:relative;}
main ul li i{height:.92rem;width:.92rem;border-radius:50%;border:.01rem solid #e2e2e2;position:absolute;top:.21rem;left:.23rem;}
main ul li i img{height:.92rem;width:.92rem;border-radius:50%;}
main ul li .men{position:absolute;left:1.37rem;top:.18rem;}
main ul li .men h3{font-size:.28rem;line-height:.52rem;color:#000;}
main ul li .men p{font-size:.24rem;line-height:.59rem;color:#999;}
main ul li span{position:absolute;top:.32rem;right:.25rem;font-size:.2rem;color:#ccc;}
</style>