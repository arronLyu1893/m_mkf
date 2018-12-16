import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'

Vue.config.productionTip = false
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './assets/css/global.css'

// //引入yd-ui
// import {CheckList,CheckListItem} from 'vue-ydui/dist/lib.rem/checklist';
// //注册
// Vue.component(CheckList.name, CheckList);
// Vue.component(CheckListItem.name,CheckListItem);

//引入组件mint-ui库Header
//-引入指定组件
// import {Header,Swipe,SwipeItem,Search} from "mint-ui";
//-注册当前项目组
// Vue.component(Header.name,Header);
// Vue.component(Swipe.name,Swipe);
// Vue.component(SwipeItem.name,SwipeItem);
// Vue.component(Search.name,Search);
//完整引入
import MintUI from "mint-ui";
Vue.use(MintUI)

//console.log(Header.name);
//2.引入vue-resource 发送ajax
//-引入vue-resource 库所有组件
//import VueResource from "vue-resource";
// //-将所有组件注册
//Vue.use(VueResource);
// //#配置VueResource 服务器根目录
//Vue.http.options.root = "http://127.0.0.1:3000/";

import axios from 'axios'
//import qs from 'qs.js'

Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios
//Vue.prototype.qs = qs //全局注册，使用方法为：this.qs
// 配置公共URL
axios.defaults.baseURL = 'http://127.0.0.1:3000/'




//4:创建Vuex实例对象
  //4.1:下载Vuex npm i vuex -D
  //4.2:引入Vuex
  import Vuex from "vuex"
  //4.3:注册Vuex实例
  Vue.use(Vuex)
  //4.4:创建Vuex实例对象
  var store = new Vuex.Store({
    state:{count:0},  //购物车商品的数量
    mutations:{
      increment(state,c){  
        state.count+=c //修改共享数据的两个方法
      }, 
      substract(state){
        state.count--   //参数共享数据属性
      }  
    },
    getters:{
      optCount:function(state){
        return state.count;  //返回共享数据
      }
    } 
  });
//5:将Vuex注册Vue实例

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
 