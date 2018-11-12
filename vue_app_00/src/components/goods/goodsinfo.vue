<template>
  <div class="app-goodsinfo">
      <h2>商品详情页</h2>
  </div>
</template>
<script>
  export default {
    data() {
      return{ }
    },
    created(){
      console.log(this.$route.query.id);

    }
  }
</script>
<style>

</style>

