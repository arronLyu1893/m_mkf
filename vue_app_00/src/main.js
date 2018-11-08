import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'

Vue.config.productionTip = false
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//引入组件mint-ui库Header
//-引入指定组件
import {Header,Swipe,SwipeItem} from "mint-ui";
//-注册当前项目组
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);

console.log(Header.name);
//2.引入vue-resource 发送ajax
//-引入vue-resource 库所有组件
import VueResource from "vue-resource";
//-将所有组件注册
Vue.use(VueResource);

//#配置VueResource 服务器根目录
Vue.http.options.root = "http://127.0.0.1:3000/";

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
