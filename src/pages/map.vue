<template>

  <div class="map">
   <p class="fhbtn"><a href="javescript:;" ></a></p>
 
     <header>
	  <a href="javascript:;" class="menu" onclick= "window.history.go(-1)"></a>
	<p>
    <a href="">百度地图</a>
 
    </p>
</header>
    
    <div id="allmap" style="height:500px"></div>
   <!--  <input type="text" v-model="start">
    <input type="text" v-model="end">
    <input type="button" value="搜索路线" @click="search">


    <hr>
    <input type="text" v-model="eat">
    <input type="button" value="搜索" @click="searchEat"> -->


  </div>
</template>
<script>

export default {
  data(){
    return {
      start:'北京 天安门',
      end:'上海 人民广场',
      eat:'餐厅'
    }
  },
  methods:{
    search(){
      //创建路线实例
      var driving = new BMap.DrivingRoute(this.map, {renderOptions:{map: this.map, autoViewport: true},policy: 'BMAP_DRIVING_POLICY_AVOID_HIGHWAY'});

      this.map.clearOverlays(); //清除覆盖物
			driving.search(this.start,this.end);//检索路线
    },
    searchEat(){
      //创建一个搜索实例
      var local =  new BMap.LocalSearch(this.map, {renderOptions: {map: this.map, autoViewport: false}});  

      this.map.clearOverlays(); //清除覆盖物
      
      //检索周边
      local.searchNearby(this.eat,this.point,5000);

      this.marker = new BMap.Marker(this.point);  // 创建标注
      this.map.addOverlay(this.marker);// 将标注添加到地图中

    }
  },
  mounted(){
    this.map = new BMap.Map("allmap");    // 创建Map实例
   this.map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
	this.map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用 */
    this.point = new BMap.Point(121.4979538030,31.3847636119)
    this.map.centerAndZoom(this.point, 18);  // 初始化地图,设置中心点坐标和地图级别
    this.marker = new BMap.Marker(this.point);  // 创建标注
    this.map.addOverlay(this.marker);// 将标注添加到地图中
    this.marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
  }
}
</script>
<style scoped>
header .menu{width:0.23rem;height:0.25rem; background:url(../assets/img/history1.png) no-repeat 0 0;position:absolute;background-size:100%; top:.34rem;left:.34rem;display:flex;align-items:center;}

header{height:.88rem;background:#09f;display:flex;justify-content:center;align-items:center;position:reletive;font-weight: 600}
header p a{width:1.2rem;text-align:center;color:#fff;font-size:.32rem;line-height: .48rem;}
</style>

