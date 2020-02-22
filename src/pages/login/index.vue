<template lang="html">
<div class="login">
  <div class="title">登录万钰平台</div>
  <div class="info">
    报表管理系统
  </div>
  <div class="login-box">
    <div class="inputbox">
      <!-- 登录账号 -->
      <div class="model">
        <input type="text" v-model="userName" />
        <div :class="['placeholder',{active:userName.length>0}]">
          登录账号
        </div>
      </div>
      <!-- 输入密码 -->
      <div class="model">
        <input
          :type="isTypePassWord?'password':'text'"
          v-model="password"
        />
        <div :class="['placeholder',{active:password.length>0}]">
          输入密码
        </div>
        <div class="icon" @click="changeInputType">
          <i class="iconfont icon-yanjing1" v-if="password.length>0&&isTypePassWord"></i>
          <i class="iconfont icon-yanjing" v-if="password.length>0&&(!isTypePassWord)"></i>
        </div>
      </div>
    </div>
    <button disabled v-if="isSended">
      <md-icon name="spinner" size="lg"></md-icon>
    </button>
    <button v-else @click="login">登录</button>
  </div>
</div>
</template>
<script>


export default {
  data() {
    return {
      isSended: false, // 是否已发送请求
      isTypePassWord: true,
      userName: "test1",
      
      password: "12",
    };
  },
  methods: {
    // 改变密码框的显示形式
    changeInputType() {
      this.isTypePassWord = !this.isTypePassWord;
    },
    // 登录
    login() {
      if (this.userName === "" || this.password === "") {
        this.$toast.fail('请输入账号密码');
        return;
      }
      this.isSended = true;
      this.$xhr('login',{
        name: this.userName,
        password: this.password
      }).success(res => {
        sessionStorage.setItem('token', res.token)
        sessionStorage.setItem('userName', res.data.name)
        sessionStorage.setItem('userId', res.data.id)
        sessionStorage.setItem('identity', res.data.identity)
        this.$router.push(`/index/`);
        this.isSended = false;
      }).error(err => {
        this.$message.error(err)
      })

    }
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>