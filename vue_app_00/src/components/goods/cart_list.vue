<template>
  <div class="app-cartList">
    <!-- 导航 -->
    <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click.stop.prevent="jump('/home/goods/goodsinfo')"></a>
      <a class="mui-icon mui-icon-more-filled mui-icon-right-nav mui-pull-right"> 
      </a>
			<h1 class="mui-title">购物车</h1>
		</header>
    <!-- 购物车列表 -->
    <div class="cart-list-wrap">
      <div class="goods-store" @click="selectedAll()">
        <input type="checkbox" @click.prevent="" :checked="isAllChecked">
        <i class="icon-store"></i>
        <span>官方自营</span>
      </div>
      <div class="goods-item" v-for="(item,i) in arr" :key="i">
        <div  @click="oneSelected(item)">        
          <input type="checkbox" @click.prevent="" :checked="item.isChecked">                   
          <div class="goods-pic"> 
              <img src="http://127.0.0.1:3000/img/product/md/iphonsXS-3_05905759410575943_60.jpg">            
          </div>
          <div class="goods-info">
            <div class="goods-title">            
                <h4>{{item.title}}</h4>   
            </div>
            <div class="goods-price">
              <span class="price">￥<em>{{item.price}}</em></span>           
            </div>    
          </div>                                
        </div>
        <!-- 增减按钮 -->
        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
          <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub(item.id)">-</button>
          <input id="test" class="mui-input-numbox" type="number" :value="item.count" />
          <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd(item.id)">+</button>
        </div>      
      </div>
		</div>
    <div>合计：{{getSubTotal}}</div>
    
  </div>
</template>
<script>
  export default {
    data() {
      return {
        arr:[{
          id:1,
          title:"iphoneX",
          price:7988,
          count:2
        },{
          id:2,
          title:"iphoneXS",
          price:8988,
          count:3
        },{
          id:3,
          title:"iphoneXsMax",
          price:9988,
          count:2
        },{
          id:4,
          title:"HuaweiP20",
          price:5988,
          count:1
        },{
          id:5,
          title:"Meizu16th",
          price:3588,
          count:2
        },{
          id:6,
          title:"OPPO R17",
          price:9988,
          count:1
        },{
          id:7,
          title:"三星S9",
          price:5988,
          count:2
        },{
          id:8,
          title:"小米8",
          price:2788,
          count:2
        }],
        val:1,
        /*全选 */
        isAllChecked:false 
      }
    },
    methods:{
      jump(url){
        this.$router.push(url);
      },
      goodAdd(id){
        //1.获取数组中每个元素
        for(var item of this.arr){
        //2.判断参数中id是否与当前元素id相同
          if(item.id == id){
            if(item.count > 8)return;
            //3.当前元素数量+1
            item.count++;
            break;
            // if(this.val<=8){
            //   this.val++;
            // }
          }
        }
      },
      goodSub(id){
        for(var item of this.arr){
          if(item.id == id){
            if(item.count < 2)return;
            item.count--;
            break;
            // {
            // this.val--;
            // }
          }
        }
      },
      /*单个复选框事件*/
      oneSelected:function(item){
        if(typeof item.isChecked == "undefined"){
          this.$set(item,"isChecked",true);
        }else{
          item.isChecked = !item.isChecked;
        }
        this.isSelectedAll(item);
      },
      /**判断是否全选 */
      isSelectedAll:function(item){
        var flag = true;
        this.arr.forEach(function(value,index){      
          if(!value.isChecked){
            flag = false;
          }
        })
        this.isAllChecked = flag ? true : false;
      },
      /*全选与取消全选 */
      selectedAll:function(){
        this.isAllChecked = !this.isAllChecked;
        var aa = this.isAllChecked;
        this.arr.forEach(function(value,index){
          value.isChecked = aa;
        })

      }

    },
    created() {
      
    },
    computed:{//计算属性
      getSubTotal:function(){
        //计算商品累加合并返回
        //1.创建临时变量 
        var sum = 0;
        //2.创建循环
        for(var item of this.arr){
          //3.计算累加和
          sum += item.price * item.count;
        }
        //4.返回累加结果
        return sum;
      }



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
.app-cartList input[type="checkbox"] {
  float:left;
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
.app-cartList .goods-item input[type="checkbox"] {
  top: 1.6rem;
}
.app-cartList input[type="checkbox"]:checked{
  background-color: #ed5564;
  border-color: #ed5564;
}
.app-cartList input[type="checkbox"]:checked:after{
  content: '';
  position: absolute;
  left: 0.17rem;
  top: 0.18rem;
  width: 0.7rem;
  height: 0.4rem;
  border-left: 0.065rem solid #fff;
  border-bottom: 0.065rem solid #fff;
  transform: rotate(-45deg);
}
.app-cartList  i.icon-store {
  display: inline-block;
  background:url('../../img/goodlist/store_b.png') no-repeat 50% 50%;
  background-size: 100%;
  width: 1.1rem;
  height: 1.1rem;
  margin: 0 0.8rem;
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
  .app-cartList .cart-details {
    margin-left: 2rem;
    padding-top: 0.62rem;
    border-bottom: 1px solid #ddd;
    position: relative;
  }
  .app-cartList .cart-list-wrap .goods-pic {
    float: left;
    width: 4.3rem;
    height: 4.3rem;
    margin-left: 0.5rem;
  }
  .app-cartList .goods-pic img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .app-cartList  .goods-info  a {
    display: block;
    color: #111;
  }
  .app-cartList  .goods-info .goods-title h4{
    font-size: 0.88rem;
    overflow: hidden;
    height: 1.1rem;
    line-height: 1.1rem;
    font-weight: 100;
    margin-left: 83px;
  }
  .app-cartList  .goods-info .goods-price .price {
    
    font-size: 0.95rem;
    color: #DB4453;
    font-weight: 600;
    line-height: 1rem;
  }
  /*加减*/
  .app-cartList  .mui-numbox{
    margin-left: 7.8rem;
    height: 25px;
  }
  .app-cartList .goods-store {
    padding: 0.5rem 15px;
    border-bottom: 0.05rem solid #ddd;
  }
  .app-cartList .goods-item {
    padding: 10px 0 15px 15px;
    border-bottom: 0.05rem solid #ddd;
  }
</style>

