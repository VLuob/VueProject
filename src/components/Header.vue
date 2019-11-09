<template>
   <header>
	<p>
    	<router-link tag='a' to='/follow'>热点</router-link>
        <router-link tag='a' to='/column'>关注</router-link>
    </p>
</header>
</template>
<style scoped>
header{height:.88rem;background:#09f;display:flex;justify-content:center;align-items:center;position:reletive;}
header p{display:flex;border-radius:.24rem;overflow:hidden;}
header p a{width:1.2rem;text-align:center;background:#06F;color:#fff;font-size:.24rem;line-height: .48rem;}
header p a:active{color:#fff;}
</style>
