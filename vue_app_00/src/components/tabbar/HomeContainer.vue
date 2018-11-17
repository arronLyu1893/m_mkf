<template>
  <div class="app-homeContainer">
    <!-- <mt-header fixed title="迈客风"></mt-header> -->
    <!-- LOGO+搜索框+登录 -->
    <header id="header"  class="transparent">
      <div class="logo"></div>
      <div class="header-wrap">
        <a href="#" class="header-input">
          <i></i>
          <span class="search-input" placeholder="文具">文具</span>
        </a>
      </div>
      <div class="login">
        <router-link to="/home/login">
          <i></i>
          <p>登录</p></router-link>
      </div>
      
    </header>
    <!--轮播图-->
    <mt-swipe :auto="3000" :show-indicators="false">
      <mt-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.img_url" />
      </mt-swipe-item>
    </mt-swipe>
    <!--海报1 -->
    <div class="nctouch-home-block">
      <a href="#"><img src="http://127.0.0.1:3000/img/s0_05945853449335437.jpg" ></a>
    </div>
    <!-- 九宫格 -->
    <div class="ntc-home">
      <ul>
        <li>
          <a href="#"><i></i>
          <p>分类</p></a></li>
        <li>
          <a href="#"><i></i>
          <p>购物车</p></a></li>
        <li>
          <a @click.stop.prevent="jumpShop()"><i></i>
          <p>我的商城</p></a></li>
        <li>
          <a href="#"><i></i>
          <p>客户服务</p></a></li>
        <li>
          <a href="#"><i></i>
          <p>门店列表</p></a></li>
      </ul>
		</div>
    <!--商品楼层 -->
    <div class="ntc-layout">
      <div class="nctouch-home-block">
        <a href="#"><img src="http://127.0.0.1:3000/img/poster2_s0_05950965800342192.jpg" ></a>
      </div>
      <div class="nctouch-home-block">
        <ul>
          <li><a href="#"><img src="http://127.0.0.1:3000/img/index_product/1f/F1-1.jpg">
              </a></li> 
          <li><a href="#"><img src="http://127.0.0.1:3000/img/index_product/1f/F1-2.jpg">
              </a></li> 
          <li><a href="#"><img src="http://127.0.0.1:3000/img/index_product/1f/F1-3.jpg">
              </a></li> 
          <li><a href="#"><img src="http://127.0.0.1:3000/img/index_product/1f/F1-4.jpg">
              </a></li>  
          <li><a href="#"><img src="http://127.0.0.1:3000/img/index_product/1f/F1-5.jpg">
              </a></li> 
          <li><a href="#"><img src="http://127.0.0.1:3000/img/index_product/1f/F1-6.jpg">
              </a></li> 
          <li><a href="#"><img src="http://127.0.0.1:3000/img/index_product/1f/F1-7.jpg">
              </a></li> 
          <li><a href="#"><img src="http://127.0.0.1:3000/img/index_product/1f/F1-8.jpg">
              </a></li>
        </ul>
      </div> 
      <div class="nctouch-home-block mui-content" >
        <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in list2" :key="item.id">
                <a href="#">
                    <img class="mui-media-object" :src="item.img_url">
                    </a></li>
        </ul>    
      </div>
      <div class="nctouch-home-block">
        <a href="#"><img src="http://127.0.0.1:3000/img/poster3_s0_05895432640695894.png" ></a>
      </div>


      
    </div>  
    <!-- footer -->
    <footer id="footer">
      <div class="nctouch-footer-wrap posr">
        <div class="nav-text">
          <router-link to="/home/login">登陆</router-link>
          <a href="#">注册</a>
          <a href="#">反馈</a>
          <a href="#">返回顶部</a>
        </div>
        <div class="nav-pic">
          <a href="#" class="app"><span>
            <i></i></span><p>客户端</p></a>
          <a href="#" class="phone"><span>
            <i></i></span><p>触屏版</p></a>
          <a href="#" class="pc"><span>
            <i></i></span><p>电脑版</p></a>
        </div>
        
      </div>
    </footer>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        list:[],
        list2:[],
        ishome:true,
      }
    },
    methods:{
      jumpShop(){
        //编程跳转方式
        //this.$router.push("/home/goodslist?id=15");
        this.$router.push("/home/goodslist/19");
      },
      getImage(){
        this.$http.get("imagelist").then(result=>{
          //console.log(result.body);
          this.list = result.body;
        })
      },
      getImage2(){
        this.$http.get("f_imagelist").then(result=>{
          this.list2 = result.body;
        })
      },
      // handleScroll () {
      //    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //    console.log(scrollTop)
      //  }
    },
    created(){
      if(this.ishome){
        window.onscroll=function(){
          var scrollTop=
            document.documentElement.scrollTop;
          var header=document.getElementById("header");
          if(scrollTop>=300){
            header.style.backgroundColor="rgba(201,21,35,0.9)";
          }else{
            header.style.backgroundColor="rgba(201,21,35,0)";
          }
        }
      };
      this.getImage();
      this.getImage2();
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    
  }
</script>
<style>
  /* 搜索框样式 */
  .app-homeContainer .transparent {
    width: 100%;
    position:fixed;
    z-index: 10;
    transition: background .5S linear;
    background-color: rgba(201,21,35,0)
  }
  .app-homeContainer .transparent .logo{
    background:url('../../img/home_logo.png');
    position: absolute;
    background-size: 100%;
    width: 5.6rem;
    height: 1.5rem;
    left: 0.15rem;
    top: 0.65rem;
  }
  .app-homeContainer .transparent .header-wrap {
    float: left;
  }
  .app-homeContainer .transparent .header-wrap .header-input{
    background-color: rgba(255,255,255,0.9);
    margin: 0.5rem 0 0.5rem 6.3rem;
    height: 1.9rem;
    line-height: 1.9rem;
    width: 14.5rem;
    display:block;
    border-radius: 2px;
    color: #dfdfdf;
  }
  .app-homeContainer .transparent .header-wrap .header-input i{
    float: left;
    width: 1.6rem;
    height: 1.6rem;
    background:url('../../img/search_ico.png') no-repeat 50% 50%;
    background-size: 70%;
    opacity: 0.3;
    margin-top: 0.14rem;
  }
  .app-homeContainer .nctouch-home-block img{
    width: 100%;
  }
  .login{
    float:left;
  }
  /*轮播图样式*/
  .app-homeContainer .mint-swipe{
    height:125px; 
  }
  .app-homeContainer .mint-swipe img{
    width:100%;
  }
  /* 五宫格样式*/
  .ntc-home{
    padding-top: 5px;
    background-color: #fff;
    border-bottom: solid 0.05rem #EEE;
  }
  .ntc-home ul{
    list-style:none;
    display:flex;
    justify-content: space-around;
    padding: 0;
    margin: 10px auto 0;
  }
  .ntc-home ul li a{
    text-align: center;
  }
  .ntc-home ul li a i{
     display: block;
     width: 44px;
     height: 44px;
  }
  .ntc-home ul li:nth-child(1) i{
    background:url('../../img/browse_list_w.png');
    background-size:100%;
  }
  .ntc-home ul li:nth-child(2) i{
    background:url('../../img/cart_w.png');
    background-size:100%;
  }
  .ntc-home ul li:nth-child(3) i{
    background:url('../../img/member_w.png');
    background-size:100%;
  }
  .ntc-home ul li:nth-child(4) i{
    background:url('../../img/mcc_04_w.png');
    background-size:100%;
  }
  .ntc-home ul li:nth-child(5) i{
    background:url('../../img/service_w.png');
    background-size:100%;
  }
  .ntc-home ul li p{
    display: block;
    font-size: 0.6rem;
    line-height: 1.9rem;
    color: #555;
    margin-left: -2px;
  }
  /* 商品详情 */
  .app-homeContainer .mui-content .mui-table-view{
    padding:0;
    margin: 0 !important;
  }
  .app-homeContainer .mui-content .mui-table-view li{
    border-bottom: 0.05rem solid #CCC ;
    margin-right: 0;
  }
  .app-homeContainer .mui-content .mui-table-view li:nth-child(even){
    border-left: 0.05rem solid #CCC;
  }
  .app-homeContainer .transparent  .login {
    width: 1.8rem;
    height: 1.8rem;
    float:right;
    margin: 0.2rem 0.4rem 0.2rem 0;
    text-align: center;
  }
  .app-homeContainer .transparent  .login p{
    color: #fff;
    font-size: 0.5rem;
    line-height: 0.9rem;
    text-align: center;
    margin-top: 0.3rem;
  }
  .app-homeContainer .transparent  .login i{
    margin: 0 auto;
    display: block;
    background:url('../../img/member_index.png') no-repeat ;
    width: 1.3rem;
    height: 1.3rem; 
    background-size: contain;
  }
  .app-homeContainer .ntc-layout .mui-table-view {
    background-color: #fff;
  }
  .app-homeContainer .ntc-layout .nctouch-home-block {
    width: 100%;
    clear: both;
  }
  .app-homeContainer .ntc-layout .nctouch-home-block a {
    display: block;
  }
  .app-homeContainer .ntc-layout .nctouch-home-block ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .app-homeContainer .ntc-layout .nctouch-home-block:nth-child(2) li{
    width: 25%;
    float:left;
    height: 109px;
  }



  /* 版权所有 */
  .nctouch-footer-wrap{
    background-color: #fff;
    border-top:0.05rem solid #eee;
  }
  .nctouch-footer-wrap .nav-text{
    padding: 0.6rem 0;
    text-align: center;
    border-bottom: 0.05rem solid #eee;
  }
  .nctouch-footer-wrap .nav-text a:nth-child(1){border-left:none}

  .nctouch-footer-wrap .nav-text a{
    display:inline-block;
    width: 24%;
    color: #555;
    font-size: 0.8rem;
    border-left: 1px solid #eee;
  }

  .nctouch-footer-wrap .nav-pic {
    padding: 0.6rem 0;
    text-align: center;
    border-bottom: 0.05rem solid #eee;
  }
  .nctouch-footer-wrap .nav-pic a {
    display:inline-block;
    width: 33.33%;
    text-align: center;
    
  }
  .nctouch-footer-wrap .nav-pic  span {
    display: inline-block;
    width: 2.6rem;
    height: 2.6rem;
    border:1px solid #ccc;
    border-radius: 100%;
  }
  .nctouch-footer-wrap .nav-pic  span i{
    display: block;
    width: 1.3rem;
    height: 1.3rem; 
    margin: 0 auto;
    margin-top: 0.6rem;
  }
  .nctouch-footer-wrap .nav-pic .app span i{
    background:url('http://127.0.0.1:3000/img/home/foot_app.png') no-repeat;
    background-size: contain;
  }
  .nctouch-footer-wrap .nav-pic .phone span i{
    background:url('http://127.0.0.1:3000/img/home/foot_touch.png') no-repeat;
    background-size: contain;
  }
  .nctouch-footer-wrap .nav-pic .pc span i{
    background:url('http://127.0.0.1:3000/img/home/foot_pc.png') no-repeat;
    background-size: contain;
  }
  </style>