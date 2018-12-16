<template>
  <div class="app-login">
    <!-- 导航 -->
    <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click.stop.prevent="jump('/')">
      </a>
		</header>
    <!-- LOGO -->
    <div class="IMG">
      <img src="../../m_img/2517_iOS @3x.png" alt="">
    </div>
    <!-- 账户密码 -->
    <div id="login">
      <div class="weui-cell">
        <input type="text" id="uname" v-model="unameval" placeholder="请输入手机号" @keyup.13="btnSubmit" ><br/>
      </div>
      <div class="weui-cell"> 
        <input type="password" id="upwd" v-model="upwdval" placeholder="请输入密码" @keyup.13="btnSubmit" ><br/>
      </div>
      <div class="login_control">
        <a class="register" href="#">注册账号</a>
        <a class="forget_pwd" href="#">忘记密码 ?</a>
      </div>
      <a class="login_go" @click.stop.prevent="btnSubmit">登录</a>
      <a class="wx_go" >微信登录</a>
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
      jump(url){
        this.$router.push(url);
      },
      btnSubmit(){
        console.log('1');
        var u = this.unameval;
        var p = this.upwdval;
        console.log(u+"_"+p);
        this.$axios.get("login?uname="+u+"&upwd="+p).then(result=>{
          console.log(result.data)
          if(result.data.code == 1){
            sessionStorage['uname']=result.data.uname
            Toast(result.data.msg);
            this.$router.push("/");
          }else{
            Toast(result.data.msg);
          }  
        })
      }

    }


  }
</script>
<style>
.app-login {
  background-color: #fff;
  height: 598px;
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
.login_go,.wx_go {
  display: block;
  width: 90%;
  font-size: 1.1rem;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  border-radius: 0.2rem;
  height: 3.5rem;
  line-height: 3.5rem;
}
.login_go{
  background: rgba(255, 51, 51, 0.5);
  margin-bottom: 0.7rem;
}
.wx_go{
  background: rgba(35, 193, 32, 1);
}
</style>
