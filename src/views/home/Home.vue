<template>
<!-- 首页 -->
  <div class="indexContainer">
    <div class="wapper">
      <!-- 顶部内容区 -->
      <StaticPart />
      <!-- 附近店铺列表 -->
      <Nearby />
    </div>
    <!-- 底部分类栏 -->
    <Docker />
  </div>
</template>

<script>
  import StaticPart from './StaticPart.vue'
  import Nearby from './Nearby.vue'
  import Docker from './Docker.vue'
  export default {
    name:'Home',
    components:{
      StaticPart,
      Nearby,
      Docker
    },
  }
</script>

<style lang="scss" scoped>
  .wapper {
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 50px;
    padding: 0 18px;
    width: 100%;
    box-sizing:border-box;
  }
</style>
