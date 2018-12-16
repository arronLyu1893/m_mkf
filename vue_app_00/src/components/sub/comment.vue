<template>
  <div class="app-comment">
    <h1>商品评论子组件接收到的参数：{{id}}</h1>
    <ul>
      <li @click="getContent" v-for="item in specs" :key="item">{{item.color}}</li>
    </ul>
    
  </div>
</template>
<script>
  export default{   
    data(){
      return {
        list:['第一项','第二项','第三项','第四项','第五项']
      }
    },
    props:["specs"],//子组件接收父组件传递的参数
    methods:{
      getContent:function(ev){
        //console.log(this)
        //console.log(ev.target.innerHTML)
        this.$emit('changeEvents',ev.target.innerHTML)
      }
    }
  }
</script>
<style>

</style>

