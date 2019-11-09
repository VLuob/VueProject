<template>
<div id="case">
	<ul>
		<li v-for='item of list' :key='item._id'>
        	<router-link :to="'/detail/' + item._id + '?dataName=' + dataName">
            	<img :src="baseUrl + item.detail.icon"/>
            	<p>{{item.des}}</p>
        	</router-link>
        </li>
    </ul>
</div>
</template>
<script>
export default {
  props:['list','dataName']
}
</script>
<style scoped>
@import url('../assets/css/list.css');
</style>
  