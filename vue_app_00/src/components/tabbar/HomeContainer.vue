<template>
  <div classs="app-homeContainer">
    <mt-header fixed title="迈客风"></mt-header>
    <!--轮播图-->
    <mt-swipe :auto="3000" :show-indicators="false">
      <mt-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.img_url" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  export default{
    data() {
      return {list:[] }},
    methods:{
      getImage(){
        var url = "http://127.0.0.1:3000/imagelist";
        this.$http.get(url).then(result=>{
          //console.log(result.body);
          this.list = result.body;
        })
      }
    },
    created(){
      this.getImage();
    }
  }
</script>
<style>
  /*轮播图样式*/
  .app-homeContainer .mint-swipe{
    height:200px;
  }
  .app-homeContainer .mint-swipe img{
    width:100%;
  }
  /*六宫格样式*/ 
  .app-homeContainer .mui-grid-view.mui-grid-9 {
    background:#fff;
    border:0;
  }
  .app-homeContainer .mui-grid-view.mui-grid-9 img {
    width:60px;
    height:60px;
  }
  .app-homeContainer .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size:13px ;
  }
</style>