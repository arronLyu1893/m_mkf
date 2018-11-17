<template>
  <div class="app-goodsinfo">
      <!--轮播图-->
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="(item,i) in pics" :key="i">
          <img :src="'http://127.0.0.1:3000/'+pics[i].md" />
        </mt-swipe-item>
      </mt-swipe>
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
          <div class="item-more arrow-right"></div>
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
        <div class="goods-details-foot"></div>
			</div>   
  </div>
</template>
<script>
  export default {
    data() {
      return{ 
        list:[],
        product:{},
        pics:[],
        lid:this.$route.query.lid,
      }
    },
    methods:{
      getGoodsInfo(){
        var url="goodsinfo"
        this.$http.get(url+"?lid="+this.lid).then(result=>{
          this.product=result.body.product;
          this.pics=result.body.pics;
          console.log(this.pics);
          console.log(this.product);
        })
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
  
  .app-goodsinfo mt-swipe {
    position:fixed;
    top: 0;
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
    bottom: 0px;
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

  /*规格详情*/
  .goods-details-card .goods-detail-item.spec .item-con dt span {
    border:1px solid #ccc;
    color: #777;
    margin-right: 0.55rem;
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
  /**/
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




</style>

