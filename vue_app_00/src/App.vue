<template>
 <div class="app-container">
     <!--2:容器显示不同组件-->
    <router-view></router-view>
    <!--3:底部版权信息-->
    <div class="copyright">
        Copyright © 2008-2017 迈客风51MKF.COM 版权所有
    </div>
 </div>
</template>

<style>
body,html{
	max-width: 768px;
	margin: 0 auto;
	background-color: #fff;
}
.app-container{
	/*padding-top:40px;
	padding-bottom:50px;*/
	overflow-x:hidden;
}
.mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;
}
/* 版权信息 */
.copyright{
    height: 1.6rem;
    line-height: 1.6rem;
    font-size: 0.45rem;
    color: #555;
    text-align: center;
    text-shadow: 1px 1px 0 rgba(255,255,255,1);
  } 
	.copyright::before{
		content:"";
		display: block;
		clear: both;
	}
</style>
