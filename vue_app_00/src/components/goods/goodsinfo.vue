<template>
  <div class="app-goodsinfo">
      <div class="fixed">
        <!--轮播图-->
        <mt-swipe :auto="3000">
          <mt-swipe-item v-for="(item,i) in pics" :key="i">
            <img :src="'http://127.0.0.1:3000/'+pics[i].md" />
          </mt-swipe-item>
        </mt-swipe>
        <div class="round"><i></i></div>
      </div>
      <!-- 商品信息 -->
      <div class="goods-details-card">
        <div class="goods-detail-name">
          <h4>{{product.title}}</h4>
          <h5>{{product.subtitle}}</h5>
        </div>
        <div class="goods-detail-price">
          <span class="price">￥
            <em>{{product.price}}</em>
            </span>
          <span class="snum">销量：{{product.sales}}件</span>
        </div>
        <div class="goods-detail-item">
          <div class="item-name">送至</div>
          <div class="item-con">
            <a href="#">
              <dl>
                <dt><span>全国</span><b>有货</b></dt>
                <dd>满99.00元免基础运费</dd></dl>
            </a>
          </div>  
          <div class="item-more location"></div>
          <!-- <div class="item-local"></div> -->
        </div>
        <div class="goods-detail-item store">
          <div class="item-name">自提</div>
          <div class="item-con">
            <a href="#">
              <dl><dt>
                <span>选择有现货的门店下单，可立即提货</span>
                </dt></dl></a>
          </div>
        </div>
        <div class="goods-detail-item spec">
          <div class="item-name">已选</div>
          <div class="item-con">
            <dl><dt>
              <span>
                颜色<em>{{product.color}}</em>
              </span>
              <span>
                内存<em>{{product.memory}}</em>
              </span>
              <span>
                版本<em>{{product.editon}}</em>
              </span>
                    </dt></dl>
          </div>
          <div class="item-more arrow-right" @click="showCart"></div>
        </div>
        <div class="goods-detail-item serve">
          <div class="item-name">服务</div>
          <div class="item-con">
            <dl>
              <dt>由“官方自营”销售和发货，并享受售后服务</dt>
              <dd>
                <span>
                  <i><img src="../../img/goodlist/7day_60.gif"></i>"门店保障"</span>
                <span>
                  <i><img src="../../img/goodlist/7day_60.gif"></i>"门店保障"</span>
                <span>
                  <i><img src="../../img/goodlist/7day_60.gif"></i>"门店保障"</span>
                <span>
                  <i><img src="../../img/goodlist/7day_60.gif"></i>"门店保障"</span>
              </dd>
            </dl>
          </div>
        </div>
        <div class="goods-detail-item comment">
          <a href="#">商品评价
            <span>好评率<em>{{product.hp}}%</em></span>
            <span>（{{product.evaluate}}+条评价）</span>
            <div class="item-more arrow-right"></div>
          </a>
        </div>
        <div class="goods-details-recom"></div>
        <div class="goods-details-details"></div>
        <div class="goods-details-foot">
          <div class="otreh-handle">
            <a href="#" class="kefu">
              <i></i>
              <p>客服</p>
            </a>  
            <a href="#" class="cart">
              <i></i>
              <p>购物车</p>
            </a>
          </div>
          <div class="buy-handle">
            <a href="#" class="animation-up add-cart">加入购物车</a>
            <a href="#" class="animation-up buy-now" @click="showCart" >立即购买</a>
          </div>
        </div>
			</div>   
      <!-- 购物车弹窗 --> 
      <div class="goods-bottom-cart" :class="show?'':'block'">
        <div class="nctouch-bottom-mask-bg"></div>
        <div class="nctouch-bottom-mask-block">
          <div class="cart-tip" @click="hideCart">
            <i></i>点击此处返回
          </div>
          <div class="cart-details"> 
                  <div class="goods-pic"> 
                      <img src="http://127.0.0.1:3000/img/product/md/iphonsXS-3_05905759410575943_60.jpg">              
                  </div>
                  <div class="goods-info">
                    <div class="goods-title">            
                        <h4>{{product.title}}</h4>               
                    </div>
                    <div class="goods-price">
                      <span class="price">￥<em>{{product.price}}</em></span>
                      <span class="mall">库存99件</span>
                    </div>     
                  </div>
                  <div class="goods-close" @click="hideCart"><i></i></div>                  
          </div>
          <div class="cart-spec">
            <div class="spec-options-stock">
              <dl>
                <dt>颜色:</dt>
                <dd>
                  <a href="#">波尔多红</a>
                  <a href="#" class="current">冰珀蓝</a>
                </dd>
              </dl>
              <dl>
                <dt>内存:</dt>
                <dd>
                  <a href="#" class="current">8+128G</a>
                </dd>
              </dl>
              <dl>
                <dt>原厂延保:</dt>
                <dd>
                  <a href="#" class="">1年延保|199.00</a>
                </dd>
              </dl>
              <dl>
                <dt>碎屏保:</dt>
                <dd>
                  <a href="#" class="">碎屛保|199.00</a>
                </dd>
              </dl>

            </div>
          </div>
          <div class="cart-num">
            <span>购买数量</span>
            <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
              <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub">-</button>
              <input id="test" class="mui-input-numbox" type="number" value="1" v-model="val" />
              <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd">+</button>
            </div>
          </div>
          <div class="goods-details-foot">
            <div class="otreh-handle">
              <a href="#" class="kefu">
                <i></i>
                <p>客服</p>
              </a>  
              <a href="#" class="cart">
                <i></i>
                <p>购物车</p>
              </a>
            </div>
            <div class="buy-handle">
              <a href="#" class="animation-up add-cart">加入购物车</a>
              <a href="#" class="animation-up buy-now">立即购买</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  //2.引入mui js 库
  //import mui from "../../lib/mui/js/mui.js";
  export default {
    data() {
      return{ 
        list:[],
        product:{},
        pics:[],
        lid:this.$route.query.lid,
        show:true,
        val:1
      }
    },
    methods:{
      goodAdd(){
        if(this.val<=8){
          this.val++;
        }
      },
      goodSub(){
        if(this.val>1){
        this.val--;
        }
      },
      getGoodsInfo(){
        var url="goodsinfo"
        this.$http.get(url+"?lid="+this.lid).then(result=>{
          this.product=result.body.product;
          this.pics=result.body.pics;
          console.log(this.pics);
          console.log(this.product);
        })
      },
      showCart(){//显示购物车弹窗
        console.log(this.show);
          this.show=false;
      },
      hideCart(){//隐藏购物车弹窗
        console.log(this.show);
          this.show=true;
      }
    },
    created(){
      console.log();
      this.getGoodsInfo();

    }
  }
</script>
<style>
  /*轮播图样式*/
  .app-goodsinfo .mint-swipe{
    height:375px; 
  }
  .app-goodsinfo .mint-swipe img{
    width:100%;
  }
  /*收藏*/
  .app-goodsinfo .fixed .round {
    position: absolute;
    top: 21rem;
    right: 1rem;
    background:rgba(255, 255, 255, 0.75);
    border: 0.05rem solid #EEE;
    border-radius:100%;
    opacity: 0.75;
  }
  .app-goodsinfo .fixed .round i {
    display:block;
    background:url('../../img/goodlist/favorite_r.png') no-repeat 50% 50%;
    background-size: 60%;
    width: 1.8rem;
    height: 1.8rem;
  }
  /*商品信息*/
  .goods-detail-name,.goods-detail-price,.goods-detail-item{
    background-color: #fff;
  }
  .goods-details-card .goods-detail-name h4 {
    color: #333;
    font-size: 1rem;
    font-weight: 500;
    border-top: 1px solid #ddd;
    margin: 0;
    padding: 0.85rem 0.55rem 0.5rem 0.55rem;
  }
  .goods-details-card .goods-detail-name h5 {
    color: #777;
    font-size: 0.8rem;
    margin: 0 0.55rem;
  }
  .goods-details-card .goods-detail-price {
    position: relative;
    padding: 0.8rem 0.55rem;
  }
  .goods-details-card .goods-detail-price .price {
    display: inline-block;
    font-size: 0.55rem;
    color: #777;
  }
  .goods-details-card .goods-detail-price .price em{
    font-size: 1.5rem;
    color:#e32613;
  }
  .goods-details-card .goods-detail-price .snum {
    position: absolute;
    float:right;
    font-size: 0.7rem;
    right: 0.75rem;
    bottom: 12x;
  }
  /*快递/门店/规格/服务*/
  .goods-details-card .goods-detail-item {
    padding: 0.5rem 0.55rem;
    border-bottom: solid 0.05rem #EEE;
    position: relative;
  }
  .goods-details-card .goods-detail-item a{
    display: block;
  }
  .goods-details-card .goods-detail-item dl {
    margin: 0 0;
  }
  .goods-details-card .goods-detail-item .item-name{
    font-size: 0.8rem;
    color: #888;
    position: absolute;
  }
  .goods-details-card .goods-detail-item .item-con{
    margin-left: 2.3rem;
  }
  .goods-details-card .goods-detail-item .item-con dt{
    font-size: 0.8rem;
    color: #333;
  }
  .goods-details-card .goods-detail-item .item-con dt b{
    color: #ed5564;
    margin-left: 0.55rem;
  }
  .goods-details-card .goods-detail-item .item-con dd{
    font-size: 0.7rem;
    color: #888;
    margin: 0;
  }
  /*地址图标*/
  .item-more {
    width: 0.8rem;
    height: 0.8rem;
    position:absolute;
    top: 0.75rem;
    right: 0.8rem;
    opacity:0.55;
  }
  .item-more.location {
    background:url('../../img/goodlist/location_b.png') no-repeat 50% 50%;
    background-size: 100%;
  }
  .item-more.arrow-right {
    background:url('../../img/goodlist/arrow_right_b.png') no-repeat 50% 50%;
    background-size: 100%;
  }

  /****************************规格详情***************************/
  .goods-details-card .goods-detail-item.spec .item-con dt span {
    border:1px solid #ccc;
    color: #777;
    margin-right: 0.55rem;
    padding: 0.2rem 0;
  }
  .goods-details-card .goods-detail-item.spec .item-con dt span em {
    color: #333;
  }
  /*品质服务*/
  .goods-details-card .goods-detail-item.serve .item-con dd span {
    display: inline-block;
    color: #ed5564;
    vertical-align: middle;
    font-weight: 600;
    margin-right: 0.3rem;
    padding-bottom: 0.35rem;
  }
  .goods-details-card .goods-detail-item.serve .item-con dd span i {
    display: block;
    width: 0.9rem;
    height: 0.9rem;
    float: left;
  }
  .goods-details-card .goods-detail-item.serve .item-con dd span i img{
    width: 100%;
  }
  /********************评价*************************/
  .goods-details-card .goods-detail-item.comment {
    padding: 0.7rem 0;
    margin: 0.88rem 0;
  }
  .goods-details-card .goods-detail-item.comment a{
    position: relative;
    display: block;
    color: #888;
    font-size: 0.6rem;
    margin-left: 0.55rem;
  }
  .goods-details-card .goods-detail-item.comment a span {
    color: #ed5564;
    margin-left: 0.5rem;
  }
  .goods-details-card .goods-detail-item.comment a span:nth-child(2) {
    position: absolute;
    color: #ed5564;
    right: 2.2rem;
  }
  .goods-details-card .goods-detail-item.comment .item-more {
    top: 0.25rem;
    right: 0.9rem;
  }
  /******************购物车*******************/
  .goods-details-card .goods-details-foot {
    position: fixed;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    background:rgba(245, 245, 245,0.95);
    height: 2.78rem;
  }
  .otreh-handle {
    width: 35%;
    float:left;
  }
  .buy-handle {
    width: 65%;
    float:left;
  }
  .otreh-handle a {
    display: inline-block;
    text-align: center;
    border-top: 0.05rem solid #DDD;
  }
  .otreh-handle a i {
    display: inline-block;
    width: 1.35rem;
    height: 1.35rem;
    margin-top: 0.2rem;
    opacity: 0.75;
  }
  .otreh-handle a.kefu i{
    background:url('../../img/goodlist/kefu_b.png') no-repeat 50% 50%;
    background-size: 80%;
  }
  .otreh-handle a.cart i{
    background:url('../../img/goodlist/cart_b.png') no-repeat 50% 50%;
    background-size: 80%;
  }
  .otreh-handle a p {
    font-size: 0.6rem;
    line-height: 0.6rem;
  }
  .otreh-handle a.kefu {
    width: 44%;
    border-right:0.05rem solid #DDD;
  }
  .otreh-handle a.cart {
    width: 55%;
  }
  .buy-handle a {
    color: #fff;
  }
  .buy-handle .animation-up {
    height: 2.76rem;
    text-align:center;
    line-height: 2.76rem;
    font-size: 0.95rem;
  }
  .buy-handle .add-cart{
    background-color: #F56E52;
    float: right;
    width: 55%;
  }
  .buy-handle .buy-now{
    background-color: #ED5564;
    float: left;
    width: 45%;
  }
  /***************弹出购物车*****************/
  .app-goodsinfo .goods-bottom-cart {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
  }
  .app-goodsinfo .block {
    display:block;
  }
  .goods-bottom-cart .nctouch-bottom-mask-bg {
    z-index: 20;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:rgba(0, 0, 0, 0.65);
  }
  .goods-bottom-cart .nctouch-bottom-mask-block {
    z-index: 21;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
  }
  .goods-bottom-cart .nctouch-bottom-mask-block .cart-tip {
    position: absolute;
    top: -30px;
    color: #fff;
    font-size: 0.95rem;
    font-weight: 600;
    text-align: center;
    left: 0;
    right: 0;
    line-height: 2rem;
    height: 2rem;
  }
  .goods-bottom-cart .nctouch-bottom-mask-block .cart-tip i {
    z-index: 22;
    display:inline-block;
    background:url('../../img/goodlist/back_down.png') no-repeat 50% 50%;
    background-size: 100%;
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    margin: 0 3px 3px 0;
    opacity: 0.75;

  }
  /*商品信息*/
  .cart-details {
    padding-top: 0.62rem;
    border-bottom: 1px solid #ddd;
    position: relative;
  }
  .cart-details .goods-pic {
    float: left;
    width: 4.3rem;
    height: 4.3rem;
    margin-left: 0.5rem;
  }
  .goods-pic img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .goods-pic img{
    width: 100%;
    height: 100%;
  }
  .cart-details .goods-info {
    height: 4.7rem;
  }
  .cart-details .goods-info  a {
    display: block;
    color: #111;
  }
  .cart-details .goods-info .goods-title h4{
    font-size: 0.88rem;
    overflow: hidden;
    height: 2rem;
    line-height: 1.1rem;
    font-weight: 100;
    margin-left: 83px;
  }
  .cart-details .goods-info .goods-price .price {
    
    font-size: 0.95rem;
    color: #DB4453;
    font-weight: 600;
    line-height: 1rem;
  }
  .cart-details .goods-info  .mall{
    color: #888;
    font-size: 0.7rem;
    font-weight: 600;
    float:right;
    margin-right: 10px;
  }
  .cart-details .goods-close {
    position:absolute;
    width: 1.5rem;
    height: 1.5rem;
    background: #fff;
    border:1px solid #fff;
    border-radius: 100%;
    top: -0.75rem;
    right: 0rem;
  }
  .cart-details .goods-close i{
    display:block;
    background:url('../../img/goodlist/close_window.png') no-repeat 50% 50%;
    background-size: contain;
    width: 1.2rem;
    height: 1.2rem;
    margin: 0.1rem 0 0 0.0819rem;
  }
  /******规格******/
  .cart-spec .spec-options-stock {
    padding: 0.3rem;
  }
  .cart-spec .spec-options-stock dl {
    margin: 0 0.3rem;
  }
  .cart-spec .spec-options-stock dt {
    display: block;
    height: 2.1rem;
    padding: 0.3rem 0;
    font-size: 0.88rem;
    color: #888;
    line-height: 1.5rem;
  }
  .cart-spec .spec-options-stock dd {
    display: block;
    margin-left: 0;
  }
  .cart-spec .spec-options-stock dd a{
    display: inline-block;
    border:0.05rem solid #BBB;
    border-radius: 0.25rem;
    background-color: #fff;
    padding: 0.3rem 0.6rem;
    margin-left: 0.5rem;
    font-size:0.88rem;
    color: #888;
    margin-bottom: 0.3rem;
  }
  .cart-spec .spec-options-stock dd a:first-child {
    margin-left: 0;
  }
  .cart-spec .spec-options-stock dd .current {
    color: #fff;
    background-color: #ED5564;
  }
  .cart-num {
    position: relative;
    border-top: 0.05rem solid #ddd;
    padding: 0.5rem;
    color: #999;
    font-size: 0.88rem;
    margin-bottom: 2.6rem;
  }
  .cart-num .mui-numbox{
    left: 11rem;
  }

  .nctouch-bottom-mask-block .goods-details-foot {
    position: fixed;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(245, 245, 245,0.95);
    height: 2.78rem;
  }
  .nctouch-bottom-mask-block .buy-handle .animation-up {
    height: 2.78rem;
    line-height: 2.78rem;
  }


</style>

