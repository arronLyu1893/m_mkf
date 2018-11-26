<template>
  <div class="app-login">
    <!-- 导航 -->
    <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click.stop.prevent="jump('/home/goods/goodsinfo')"></a>
      </a>
		</header>
    <!-- LOGO -->
    <div class="IMG">
      <img src="../../m_img/2517_iOS @3x.png" alt="">
    </div>
    <!-- 账户密码 -->
    <div id="login">
      <div class="weui-cell">
        <input type="text" name="uname" v-model="unameval" placeholder="请输入手机号"><br/>
      </div>
      <div class="weui-cell"> 
        <input type="password" name="upwd" v-model="upwdval" placeholder="请输入密码"><br/>
      </div>
      <div class="login_control">
        <a class="register" href="#">注册账号</a>
        <a class="forget_pwd" href="#">忘记密码 ?</a>
      </div>
      <input type="button" id="btn1" value="登录" @click="btnSubmit"><br/>
      <input type="button" id="btn2" value="微信登录" @click="btnSubmit2"><br/>
    </div>

  </div>
</template>
<script>
  //引入子组件
  import {Toast} from "mint-ui";

  export default {
    data() {
      return {
        unameval:"",
        upwdval:""
      }
    },
    methods:{
      btnSubmit(){
        var u = this.unameval;
        var p = this.upwdval;
        this.$http.get("login?uname="+u+"&upwd="+p).then(result=>{
          if(result.body.code == 1){
            Toast(result.body.msg);
            this.$router.push("/");
          } else{
            Toast(result.body.msg);
          }  
        })
      }

    }


  }
</script>
<style>
.app-login {
  background-color: #fff;
}
.app-login .mui-bar .mui-icon {
  color: #666;
}
.app-login .IMG{
  margin-top: 2.7rem;
}
.app-login .IMG img{
  display:block;
  width: 7.5rem;
  margin: 0 auto;
  padding: 0.7rem 0 0.5rem 0;
  opacity: 1;
}
.app-login .weui-cell{
  width: 85%;
  margin: 0 auto;
  border-bottom: 0.1rem dotted #dfdfdf;
}
.app-login .weui-cell input{
  border:0;
  padding: 1.8rem 0;
  margin-bottom: 0;
}
.app-login .login_control {
  width: 85%;
  margin: 0 auto 3.1rem;
  line-height: 3rem;
}
.app-login .login_control a {
  font-size: 0.95rem;
}
.app-login .login_control .register{
  margin-left: 0.8rem;
  color: #e32613;
}
.app-login .login_control .forget_pwd {
  float:right;
  margin-right: 0.8rem;
}
.app-login input[type="button"] {
  display:block;
  width: 85%;
  font-size: 1.1rem;
  height: 3.5rem;
  margin: 0 auto;
  color: #fff;
}
.app-login #btn1{
  background: rgba(255, 51, 51, 0.5);
}
.app-login #btn2{
  background: rgba(35, 193, 32, 1);
}
</style>
