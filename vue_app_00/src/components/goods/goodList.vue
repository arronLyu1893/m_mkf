<template>
  <div class="app-goodList">
    <!-- 搜索查询 -->
    <header  class="fixed">
      <div class="header-wrap">
        <div class="header-left">
          <router-link to="/home">
            <i class="back"></i></router-link>
        </div>
        <div class="header-input">
          <div href="#" class="input">
            <i></i>
            <span class="search-input" placeholder="文具">文具</span>
          </div>
        </div>
        <div class="header-right">
          <a href="#" class="categroy">
            <i></i></a>
          <a href="#" class="more">
            <i></i></a>
        </div>
      </div>
      <div class="more-list none">
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">购物</a></li>
          <li><a href="#">我的商城</a></li>
          <li><a href="#">消息</a></li>
        </ul>
      </div>
    </header>
    <!-- 筛选 -->
    <div class="goods-search-list-nav fixed">
      <ul>
        <li @click="dropdown"><a href="#">
          综合排序<i></i></a></li>
        <li><a href="#">
          销量优先<i></i></a></li>
        <li><a href="#">
          筛选<i></i></a></li>
      </ul>
      <div class="browse-mode">
        <a href="#">
          <span class="browse-list"></span>
        </a>
      </div>
    </div>
    <!-- 综合排序下拉菜单 -->
    <div :class="drop?'':'none'" class="sort_inner ">
      <span><a href="#" class="cur">综合排序<i></i></a></span>
      <span><a href="#">价格从高到低<i></i></a></span>   
      <span><a href="#">价格从低到高<i></i></a></span>
      <span><a href="#">人气排序<i></i></a></span>
    </div>
    <!-- 商品列表 -->
    <div class="nctouch-main-layout mt40 mb20">
      <div id="product_list" class="list">
        <ul class="goods-search-list">
          <li class="goods-item" v-for="(item,i) in phone" :key="i">
            <span class="goods-pic">
              <router-link :to="'/home/goods/goodsinfo?lid='+item.lid">
                <img :src="'http://127.0.0.1:3000/'+item.md">
              </router-link>
            </span>
            <div class="goods-info">
              <div class="goods-title">
                <router-link :to="'/home/goods/goodsinfo?lid='+item.lid">
                  <h4>{{item.title}}</h4>
                  <h6>{{item.subtitle}}</h6>
                </router-link>
              </div>
              <div class="goods-price">
                <router-link :to="'/home/goods/goodsinfo?lid='+item.lid">
                  <span>￥<em>{{item.price}}</em></span>
                </router-link>
              </div>
              <div class="goods-praise">
                <a href="#">
                  <span>{{item.evaluate}}+条评价&nbsp;好评率{{item.hp}}%</span>
                </a>
                <div class="mall">自营</div>
              </div>        
            </div>         
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script> 
  export default{
    data() {
      return { phone:[],pics:[],drop:false,ishome:false}
    },
    methods:{
      getDetails(){
        var url="goodslit2"
        this.$http.get(url).then(result=>{
          this.phone=result.body.phone;
          this.pics=result.body.pic
          console.log(result.body.pic)
          // this.list = result.body;
        })
      },
      dropdown(){
        console.log(this.drop);
        if(this.drop){
          this.drop=false;
        }
        else{
          this.drop=true;
        }
      }
    },
    created() {
      this.getDetails();
      // console.log(this.$route.params.id)
    },
  }
</script>
<style>
  .app-goodList header.fixed {
    position: fixed;
    background:rgba(245, 248, 248, 0.95);
    width:100%;
  }
  .app-goodList .header-wrap {
    position:relative;   /*相对定位*/
  }
  .app-goodList .header-wrap .header-left a {
    display:inline-block;
    width: 2.69rem;
    height: 2.69rem;
    padding: 0.47rem;
  }
  .app-goodList .header-wrap .header-left .back {
    display:inline-block;
    background:url('../../img/goodlist/arrow_left_b.png')no-repeat 50% 50%;
    width:65%;
    height:65%;
    background-size: 100%;
    opacity: 0.85;
    margin: 0.2rem;
  }
  .app-goodList .header-input {
    position:absolute;
    display: flex; /*弹性布局*/
    top: 0.32rem;
    left: 2.6rem;
  }
  .app-goodList .header-input .input{
    border:solid 0.05rem #dedede;
    background-color: rgba(255,255,255,0.9);
    height: 1.9rem;
    line-height: 1.9rem;
    width: 15.871rem;
    border-radius: 2px;
    color: #dfdfdf;
  }
  .app-goodList .header-input .input i{
    float: left;
    width: 1.6rem;
    height: 1.6rem;
    background:url('../../img/search_ico.png') no-repeat 50% 50%;
    background-size: 70%;
    opacity: 0.3;
    margin-top: 0.14rem;
  }
  .app-goodList .header-right {
    position:absolute;
    top: 0;
    right: 0;
  }
  .app-goodList .header-right .categroy,.more {
    display: inline-block;
    width: 2.69rem;
    height: 2.69rem;
    padding: 0.47rem;
    opacity: 0.75;
  }
  .app-goodList .header-right .categroy i{
    display: inline-block;
    background:url('../../img/goodlist/stiore_categroy_b.png') no-repeat 50% 50%;
    background-size: 100%;
    width: 1.8rem;
    height: 1.8rem;
  }
  .app-goodList .header-right .more i{
    display: inline-block;
    background:url('../../img/goodlist/more_b.png') no-repeat 50% 50%;
    background-size: 100%;
    width: 0.95rem;
    height: 0.95rem;
  }
  .app-goodList .goods-search-list-nav {
    z-index: 9;
    position: fixed;
    width: 100%;
    top: 2.5rem;
    background:rgba(255,255,255,0.9);
    max-width: 768px;
    border-bottom: solid 0.05rem #EEE;
  }
  .app-goodList .goods-search-list-nav ul {
    display:block;
    float: left;
    width: 84%;
    margin: 0.45rem 0 0 0;
    padding-left: 0;
    
  }
  .app-goodList .goods-search-list-nav ul li {
    list-style: none;
    display:block;
    float: left;
    width: 30%;
    text-align: center;
  }
  .app-goodList .goods-search-list-nav ul li a{
    color: #888;
    font-size: 0.85rem;
    display:block;
    line-height: 1.95rem;
    height: 1.95rem;
  }
  .app-goodList .goods-search-list-nav ul li:first-child{
    width: 40%;
  }
  .app-goodList .goods-search-list-nav ul li a i{
    border-color: gray transparent transparent transparent; 
    border-style:solid dotted dotted dotted;
    font-size: 0px;
    line-height: 0;
    vertical-align: middle;
    display: inline-block;
    width: 0px;
    height: 0px;
    margin-left: 0.2rem;
    border-width: 0.2rem;
  }
  .app-goodList .goods-search-list-nav .browse-mode{
    display:block;
    float:right;
    width: 16%;
    border-left: solid 0.05rem #eee;
  }
  .app-goodList .goods-search-list-nav .browse-mode a {
    display:block;
    line-height: 1.95rem;
    text-align: center;
  }
  .app-goodList .goods-search-list-nav .browse-mode a span{
    display: inline-block;
    background:url('../../img/goodlist/browse_list.png') no-repeat 50% 50%;
    width: 1.5rem;
    height: 1.5rem;
    background-size: 100%;
    opacity: 0.5;
    margin-top: 0.5rem;
  }
  /*下拉菜单*/
  .app-goodList .sort_inner{
    position:fixed;
    top: 5.21rem;
    background-color:rgba(0, 0, 0, 0.1);
    left: 0;
    right: 0;
    bottom: 0;
  }
  .app-goodList .none {
    display:none;
  }
  .app-goodList .sort_inner span{
    background-color: #fff;
    display: block;
    padding:0 .5rem;
  }
  .app-goodList .sort_inner span a{
    display: block;
    color: #777;
    font-size: 0.8rem;
    line-height: 1.8rem;
    height: 2.8rem;
    padding: 0.7rem 1rem 0.7rem 0.68rem;
    border-top: solid 0.05rem #EEE;
  }
  .app-goodList .sort_inner span a.cur{
    color: #Ed5564;
  }
  .app-goodList .sort_inner span a i {
    background:url('../../img/goodlist/ok.png') no-repeat 50% 50%;
    background-size: 100%;
    width: 1rem;
    height: 1rem;
    float:right;
    display: none;
  }
  .app-goodList .sort_inner span:first-child  a i{
    display:block;
  }
  /*商品列表*/
  .app-goodList .nctouch-main-layout {
    z-index: 1;
    padding-top: 83px;
  }
  .app-goodList .nctouch-main-layout li {
    list-style: none;
    display: block;
  }
  .app-goodList .nctouch-main-layout .goods-search-list{
    margin: 0;
    padding: 0;
  }
  .app-goodList .nctouch-main-layout .goods-search-list .goods-pic {
    display: block;
    float: left;
    width: 7.3rem;
    height: 7.3rem;
    padding: 0.5rem;
  }
  .app-goodList .nctouch-main-layout .goods-search-list .goods-pic a{
    display: block;
    width: 100%;
    height: 100%;
  }
  .app-goodList .nctouch-main-layout .goods-search-list .goods-pic img{
    width: 100%;
    height: 100%;
  }
  .app-goodList .nctouch-main-layout .goods-search-list .goods-info {
    background-color: #fff;
    display:block;
    height: 7.3rem;
    padding: 0.2rem;
    border-bottom: 1px solid #ddd;
  }
  .app-goodList .nctouch-main-layout .goods-search-list .goods-info  a {
    display: block;
    color: #111;
  }
  .app-goodList .nctouch-main-layout .goods-search-list .goods-info .goods-title h4{
    font-size: 0.9rem;
    overflow: hidden;
    height: 2rem;
    line-height: 1.1rem;
    font-weight: 400;
  }
  .app-goodList .nctouch-main-layout .goods-search-list .goods-info .goods-title h6 {
    font-size:0.4rem;
    height: 0.9rem;
    line-height: 0.9rem;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .app-goodList .nctouch-main-layout .goods-search-list .goods-info .goods-price span {
    color: #EC5464;
  }
  .app-goodList .nctouch-main-layout .goods-search-list .goods-info .goods-praise span{
    font-size:0.6rem;
    float: left;
  }
  .app-goodList .nctouch-main-layout .goods-search-list .goods-info .goods-praise .mall{
    color: #EC5464;
    font-size: 0.9rem;
    float:right;
    margin-right: 5px;
  }
</style>

