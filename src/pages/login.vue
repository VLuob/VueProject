<template>
  <div class="content">
    <p class="fhbtn">
      <a href="javascript:;" onclick="window.history.go(-1)"></a>
    </p>
    <div id="login">
      <div class="login-top">
        登录 |
        <router-link to="/reg">注册</router-link>
      </div>
      <div class="login-center clearfix">
        <div class="login-center-img">
          <img src="../assets/img/name.png" />
        </div>
        <div class="login-center-input">
          <input
            v-model="username"
            type="text"
            name
            value
            placeholder="请输入您的用户名"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='请输入您的用户名'"
          />
          <div class="login-center-input-text">用户名</div>
        </div>
      </div>
      <div class="login-center clearfix">
        <div class="login-center-img">
          <img src="../assets/img/password.png" />
        </div>
        <div class="login-center-input">
          <input
            v-model="password"
            type="password"
            name
            placeholder="请输入您的密码"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='请输入您的密码'"
          />
          <div class="login-center-input-text">密码</div>
        </div>
      </div>
      <div class="login-button" @click="login">登录</div>
      <li class="tis" style="color:red;margin:.2rem .2rem;">{{errM}}</li>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      errM: ""
    };
  },
  methods: {
    login() {
      this.$store.dispatch("UPDATE_USER", {
        username: this.username,
        password: this.password
      }).then(
        recepit=>recepit.err === 0 ? this.$router.push('/user') : (this.errM= recepit.msg)
      )
    }
  }
};
</script>
<style scoped>
@import url("../assets/css/style.css");
@import url("../assets/css/reset.css");
</style>