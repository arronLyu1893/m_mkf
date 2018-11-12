import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from 
"./components/HelloWorld.vue"

//1:引入自定义组件
import TestContainer from
"./components/testContainer.vue"
import listContainer from
"./components/listContainer.vue"
import homeContainer from
"./components/tabbar/HomeContainer.vue"
import login from
"./components/home/loginContainer.vue"
import goodsList from
"./components/goods/goodList.vue"
import goodsInfo from
"./components/goods/goodsinfo.vue"

Vue.use(Router)
//2:配置访问自定义组件路径
//  {path访问路径  component组件名称}
export default new Router({
  routes: [
    //{path:'/',component:HelloContainer},
    {path:'/',redirect:"home"},
    {path:"/home/login",component:login},
    {path:"/test",component:TestContainer},
    {path:"/list",component:listContainer},
    {path:"/home",component:homeContainer},
    {path:"/home/goodslist/:id",component:goodsList},
    {path:"/home/goodsinfo",component:goodsInfo}
  ]
})
