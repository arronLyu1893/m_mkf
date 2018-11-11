<template>
  <div class="app-login">
  <h3>登录</h3>
  <form>
    账户：<input type="text" name="uname" v-model="unameval"><br/>
    密码：<input type="password" name="upwd" v-model="upwdval"><br/>
    <input type="button" id="btn" value="登录" @click="btnSubmit"><br/>
  </form>
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
</style>
