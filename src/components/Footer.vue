<template>
<div class="footer">
     <div class="box"></div>
<footer>
  
	<ul>
    	<router-link to='/home' tag='li'><a href="javascript:;"><i class="i1" ></i><span>首页</span></a></router-link>
        <router-link to='/follow' tag='li'><a href="#"><i class="i2"></i><span>发现</span></a></router-link>
    </ul>
    <router-link to='/map' tag='div' class="camera"></router-link>
    <ul>
  <router-link to='/user' tag='li'><a href="javascript:;"><i class="i3"></i><span to='/user'>我的</span></a></router-link>
        <router-link to='/reg' tag='li'><a href="#"><i class="i4"></i><span>注册</span></a></router-link>
    </ul>
</footer>
</div>
</template>

<style scoped>
.box{height:.87rem;}
footer{height:.87rem;border-top:solid .01rem rgba(0,0,0,.15);position:fixed;left:0;right:0;bottom:0;background:#FFF;display:flex;justify-content:space-between;padding:0 .28rem;}
footer ul{display:flex;width:1.88rem;justify-content:space-between;}
footer ul li{overflow: hidden;}
footer ul li a{display:block;padding-top:.1rem;}
footer ul li a span{display:block;font-size:.24rem;line-height:.44rem;color:#cccccc;}
footer ul li a i{display:block;background:url(../assets/img/tuo.png) no-repeat;height:.32rem;width:.32rem;background-size:.64rem 1.28rem;margin:0 auto;}
footer ul li a i.i2{background-position:0 -.32rem;}
footer ul li a i.i3{background-position:0 -.64rem;}
footer ul li a i.i4{background-position:0 -.96rem;}

footer ul li a i.i1:active{background-position:-.32rem 0;}
footer ul li a i.i2:active{background-position:-.32rem -.32rem;}
footer ul li a i.i3:active{background-position:-.32rem -.64rem;}
footer ul li a i.i4:active{background-position:-.32rem -.96rem;}
footer ul li a span:active{color:#0dc441;}
footer .camera{height:1.10rem;width:1.10rem;border-radius:50%;border:.02rem solid #e2e2e2;position:absolute;background:#FFF url(../assets/img/kacha.png) no-repeat center;left:0;right:0;bottom:0;margin:0 auto;background-size:.59rem .55rem;}
</style>
