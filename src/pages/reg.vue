<template>
    <div class="content" >
   <p class="fhbtn"><a href="javescript:;" onclick= "window.history.go(-1)"></a></p>
  <!--<h1 @click='hh' id="hh"></h1>
  <input type="file" id="icon" style='display:none'>
  <div class="login-box">
    <p class="lsolid"></p>
    <div class="login">
        <router-link :to="{path:'/login'}">登录</router-link>
      <span></span>
      <router-link to='/reg'>注册</router-link>

    </div>
    <p class="rsolid"></p>
  </div>
  <ul>
    <li class="lifirst">
      <input type="text" v-model='username' />
      <span>帐号</span>
    </li>
    <li>
      <input type="text" v-model='password' />
      <span>密码</span>
    </li>
    {{err}}
  </ul>
  <div class="footbox">
    <input type="button" value="注 册" class="login-btn" @click='reg' />
    <a href="javascript:;" class="tishi">忘记密码？</a>
  </div> -->
  <div id="login">
			<div class="login-top">
				注册 | <router-link to="/login"> 登录</router-link>
			</div>
			<div class="login-center clearfix">
				<div class="login-center-img"><img src="../assets/img/name.png"/></div>
				<div class="login-center-input">
					<input v-model="username" type="text" name="" value="" placeholder="请输入您的用户名" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的用户名'"/>
					<div class="login-center-input-text">用户名</div>
				</div>
			</div>
			<div class="login-center clearfix">
				<div class="login-center-img"><img src="../assets/img/password.png"/></div>
				<div class="login-center-input">
					<input v-model="password" type="password" name="" placeholder="请输入您的密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的密码'"/>
					<div class="login-center-input-text">密码</div>
				</div>
			</div>
       <h1 @click='hh' id="hh" style="width:2.5rem;height:.4rem;background:#09f;border-radius:.05rem;margin:0 auto;color:#fff;font:12px/.4rem '';cursor: pointer;text-align:center;">点击上传头像</h1>
     <input type="file" id="icon" style='display:none'>
			<div class="login-button" @click="reg">
				注册
			</div>
     
      <li class="tis" style="color:red;margin:.2rem .2rem;">{{errM}}</li>
		</div>
</div>

</template>
<script>
export default {
   data(){
    return{
     username:'',
     password:'',
     errM:''
    }
  },
  methods:{
    hh(){
      let input = document.getElementById('icon')
      input.click()
    },
    reg(){
      let formData = new FormData()
      formData.append('username',this.username)
      formData.append('password',this.password)
      let input = document.getElementById('icon')
      formData.append('icon',input.files[0])
    axios({
      url:'/api/reg',
      method:'post',
      data:formData,
      
    }).then(
      res=>res.data.err === 0 ? this.$router.push('/login') : this.errM= res.data.msg
    )
    }
  }
}
</script>
<style scoped>


   @import url("../assets/css/style.css");
@import url("../assets/css/reset.css");

</style>