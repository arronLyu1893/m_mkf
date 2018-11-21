<template>
  <div class="app-cartList">
    <!-- 导航 -->
    <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <a class="mui-icon mui-icon-bars mui-icon-right-nav mui-pull-right"> 
      </a>
			<h1 class="mui-title">购物车</h1>
		</header>
    <!-- 选择 -->
    <div class="cart-list-wrap">
      <div class="nct-cart-con">
        <dl>
          <dt>
            <span class="store-check">
              <input type="checkbox" checked>
            </span>
            <i class="icon-store"></i>官方自营
            </dt>
        </dl>
        <ul>
          <li>
            <div class="goods-check">
              <input type="checkbox" checked>
            </div>
            <div class="cart-details"> 
              
                  <div class="goods-pic"> 
                      <img src="http://127.0.0.1:3000/img/product/md/iphonsXS-3_05905759410575943_60.jpg">            
                  </div>
                  <div class="goods-info">
                    <div class="goods-title">            
                        <h4>OPPO Find X曲面全景屏 冰珀蓝 8G+128G 全网通</h4>               
                    </div>
                    <div class="goods-price">
                      <span class="price">￥<em>6988</em></span>
                      
                    </div>     
                  </div>                 
            </div>
          
          </li>
        </ul>

      </div>

		</div>
  </div>
</template>
<script>
  export default {
    data() {

    },
    methods:{

    },
    created() {
      
    }
  }
</script>
<style>
.app-cartList .mui-bar a {
  color: #666;
}
.app-cartList .cart-list-wrap {
  margin-top: 2.8rem;
  background-color: #fff;
}
.app-cartList .cart-list-wrap .nct-cart-con ul {
  padding: 0;
}
.app-cartList .cart-list-wrap .nct-cart-con li {
  list-style: none;
}
.app-cartList .cart-list-wrap dl {
  display:block;
  border-bottom: solid 0.05rem #ddd;
}
.app-cartList .cart-list-wrap dl dt{
  display:block;
  font-size: 1rem;
  padding: 0.8rem;
}
.app-cartList .cart-list-wrap span.store-check {
  display: inline-block;
  margin-right: 0.5rem;
  vertical-align: top;
}
.app-cartList .cart-list-wrap .store-check input {
  width: 1.2rem;
  height: 1.2rem;
}
/* .app-cartList .cart-list-wrap input [type="checkbox"]:checked {
  background-color: #f00;
  border-color: #f00;
} */

.app-cartList .cart-list-wrap i.icon-store {
  display: inline-block;
  background:url('../../img/goodlist/store_b.png') no-repeat 50% 50%;
  background-size: 100%;
  width: 1.1rem;
  height: 1.1rem;
  margin-right: 0.5rem;
  vertical-align: middle;
}
.app-cartList .cart-list-wrap ul li {
  position: relative;
}
.app-cartList .cart-list-wrap ul .goods-check { 
  position: absolute;
  top: 1.5rem;
  left: 0.9rem;
}
.app-cartList .cart-list-wrap ul .goods-check input {
  width: 1.2rem;
  height: 1.2rem;
}
/*商品信息*/
  .cart-details {
    margin-left: 2rem;
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

</style>

