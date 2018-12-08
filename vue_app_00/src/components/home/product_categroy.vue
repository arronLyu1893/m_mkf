<template>
  <div class="app-categroy">
    <!-- 导航 -->
    <header id="header" class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click.stop.prevent="jump('/')"></a>
      <a class="search-nth">
        <i></i>
        <input type="text" value="搜索" class="search-input"> </a>   
      <a class="mui-icon mui-pull-right mui-icon-more-filled"></a>
    </header>
    <!-- body -->
    <div id="categoryBody">
      <div id="rootList">
          <ul class="categroy-list">
            <li class="category-item selected">
              <a href="#">
                <div class="ci-fcategory-ico"><img src="../../img/m_categroy/rootList/04890563696273833.png" /></div>
                <div class="ci-fcategory-name">手机通讯</div>
              </a>
            </li>
            <li class="category-item ">
              <a href="#">
                <div class="ci-fcategory-ico"><img src="../../img/m_categroy/rootList/04890563696273833.png" /></div>
                <div class="ci-fcategory-name">手机通讯</div>
              </a>
            </li>
            <li class="category-item ">
              <a href="#">
                <div class="ci-fcategory-ico"><img src="../../img/m_categroy/rootList/04890563696273833.png" /></div>
                <div class="ci-fcategory-name">手机通讯</div>
              </a>
            </li>
            <li class="category-item ">
              <a href="#">
                <div class="ci-fcategory-ico"><img src="../../img/m_categroy/rootList/04890563696273833.png" /></div>
                <div class="ci-fcategory-name">手机通讯</div>
              </a>
            </li>
            <li class="category-item ">
              <a href="#">
                <div class="ci-fcategory-ico"><img src="../../img/m_categroy/rootList/04890563696273833.png" /></div>
                <div class="ci-fcategory-name">手机通讯</div>
              </a>
            </li>
            <li class="category-item ">
              <a href="#">
                <div class="ci-fcategory-ico"><img src="../../img/m_categroy/rootList/04890563696273833.png" /></div>
                <div class="ci-fcategory-name">手机通讯</div>
              </a>
            </li>
            <li class="category-item ">
              <a href="#">
                <div class="ci-fcategory-ico"><img src="../../img/m_categroy/rootList/04890563696273833.png" /></div>
                <div class="ci-fcategory-name">手机通讯</div>
              </a>
            </li>
            <li class="category-item ">
              <a href="#">
                <div class="ci-fcategory-ico"><img src="../../img/m_categroy/rootList/04890563696273833.png" /></div>
                <div class="ci-fcategory-name">手机通讯</div>
              </a>
            </li>
            <li class="category-item ">
              <a href="#">
                <div class="ci-fcategory-ico"><img src="../../img/m_categroy/rootList/04890563696273833.png" /></div>
                <div class="ci-fcategory-name">手机通讯</div>
              </a>
            </li>
          </ul>
      </div>
      <div class="mkf-category-cotent"></div>
    </div>
        
  </div>
  
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods:{
      jump(url){
        this.$router.push(url);
      }
    }
  }
  
</script>
<style>
.app-categroy .mui-icon{
  color:#666;
}
.app-categroy .search-nth i {
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

.app-categroy .search-input {
  display: inline-block;
  width: 78%;
  height: 35px;
  margin: 5px 0 0 15px;
  border-radius: 0.2rem;
  color: #ddd;
  padding-left: 25px;
}
.app-categroy #categoryBody{
  margin-top: 44px;
  background: #fff;
}
.app-categroy #rootList {
  width: 5.8rem;
  background: #f5f5f5;
}
.app-categroy #rootList .categroy-list .category-item{
  width: 4rem;
  height: 4rem;
  background: #f5f5f5;
  margin: 0 auto;
}
.app-categroy #rootList .categroy-list .category-item a{
  display: block;
}
.app-categroy .categroy-list .ci-fcategory-ico {
  width: 1.4rem;
  margin: 0 auto;
  
    padding: 0.5rem 0  0.3rem 0;
}
.app-categroy .categroy-list .ci-fcategory-ico img {
  display:block;
  width: 100%;
}

.app-categroy .category-item.selected .ci-fcategory-name {
  color: #ED5564;
  border-color: #ED5564;
}

.app-categroy .categroy-list .ci-fcategory-name {
    color: #999;
    padding-bottom: 1.7rem;
    border-bottom: solid 0.1rem #999;
    font-size: 0.85rem;

    line-height: 1.5rem;
    text-align: center;
    width: 100%;
    height: 1.5rem;
}

</style>

