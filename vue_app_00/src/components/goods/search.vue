<template>
  <div class="app-search">
        <!-- 导航 -->
        <header id="header" class="mui-bar mui-bar-nav">
          <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click.stop.prevent="jump('/')"></a>
          <a class="search-nth">
            <i></i>
            <input type="text" value="搜索" class="search-input"> </a>   
          <a class="search-btn">搜索</a>
        </header>
        
  </div>
</template> 
<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      jump(url){
        this.$router.push(url);
      }

    },
    created(){

    }
  }
  
</script>
<style>
.app-search .mui-pull-left{
  color:#666;
}
.app-search .search-nth i {
  position:absolute;
  display: block;
  left: 3.2rem;
  top: 0.46rem;
  width: 1.6rem;
    height: 1.6rem;
    background:url('../../img/search_ico.png') no-repeat 50% 50%;
    background-size: 70%;
    opacity: 0.3;
    margin-top: 0.14rem;
}
.app-search .search-btn {
  float:right;  
  margin-top: 0.8rem;
  margin-right: 0.2rem;
  color: #333;
}

.app-search .search-input {
  display: inline-block;
  width: 75%;
  height: 35px;
  margin: 5px 0 0 15px;
  border-radius: 0.2rem;
  color: #ddd;
  padding-left: 25px;
}

</style>

