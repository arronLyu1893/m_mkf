<template>
  <div class="app-cartList">
    <!-- 导航 -->
    <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click.stop.prevent="jump('/home/goods/goodsinfo')"></a>
      <a class="mui-icon mui-icon-bars mui-icon-right-nav mui-pull-right"> 
      </a>
			<h1 class="mui-title">购物车</h1>
		</header>
    <!-- 购物车列表 -->
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
              <input type="checkbox" >
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
                  <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub">-</button>
                    <input id="test" class="mui-input-numbox" type="number" value="1" v-model="val"/>
                    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd">+</button>
                  </div>            
                </div>    
              </div>                 
            </div>
          </li>             
        </ul>
      </div>
		</div>
    <div class="cartlistitem">
        <div style="padding-left:12px;margin-bottom: 10px;">
            <yd-checkbox v-model="isCheckAll" shape="circle" :change="checkAll">官方自营 {{isCheckAll}}</yd-checkbox>
        </div>

        <yd-checklist v-model="checklist3" ref="checklistDemo" :callback="change">
            <yd-checklist-item val="1">
                <div style="height: 50px;line-height: 50px;">1 -- 值：{{checklist3}}</div>
            </yd-checklist-item>
            <yd-checklist-item val="2">
                <div style="height: 50px;line-height: 50px;">2</div>
            </yd-checklist-item>
            <yd-checklist-item val="3">
                <div style="height: 50px;line-height: 50px;">3</div>
            </yd-checklist-item>
        </yd-checklist>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        val:1,
        checklist3:[],
        isCheckAll:false
      }

    },
    methods:{
      jump(url){
        this.$router.push(url);
      },
      change(value, isCheckAll) {
        this.isCheckAll = isCheckAll;
      },
      checkAll() {
        this.isCheckAll = !this.isCheckAll;
        this.$refs.checklistDemo.$emit('ydui.checklist.checkall', this.isCheckAll);
      },
      goodAdd(){
        if(this.val<=8){
          this.val++;
        }
      },
      goodSub(){
        if(this.val>1){
        this.val--;
        }
      }

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
  margin: 0;
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
input[type="checkbox"] {
    position: relative;
    background-color: #F5F5F5;
    border: 0.05rem solid #eee;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    vertical-align: middle;
    width: 1.2rem;
    height: 1.2rem;
    -webkit-appearance: none;
}
input[type="checkbox"]:checked{
  background-color: #ed5564;
  border-color: #ed5564;
}
input[type="checkbox"]:checked:after{
  content: '';
  position: absolute;
  left: 0.17rem;
  top: 0.18rem;
  width: 0.7rem;
  height: 0.4rem;
  border-left: 0.065rem solid #fff;
  border-bottom: 0.065rem solid #fff;
  -webkit-transform: rotate(-45deg);
}

.app-cartList .cart-list-wrap i.icon-store {
  display: inline-block;
  background:url('../../img/goodlist/store_b.png') no-repeat 50% 50%;
  background-size: 100%;
  width: 1.1rem;
  height: 1.1rem;
  margin-right: 0.5rem;
  vertical-align: middle;
}
.app-cartList .cart-list-wrap ul {
  margin: 0 0;
}
.app-cartList .cart-list-wrap ul li {
  position: relative;
}
.app-cartList .cart-list-wrap ul .goods-check { 
  position: absolute;
  top: 1.5rem;
  left: 0.9rem;
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
  /*加减*/
  .cart-details .mui-numbox{
    margin-left: 5.6rem;
    height: 25px;

  }
  .cartlistitem {
    margin-top: 50px;
  }
</style>

