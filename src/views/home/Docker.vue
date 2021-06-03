<template>
 
  <!-- 底部分类栏 -->
    <div class="docker">
      <div class="docker__item" :class="{'docker__item':true,'docker__item--active':index === 0}" v-for="(item,index) in dockerList" :key="index">
        <div class="iconfont" v-html="item.icon"></div>
        <div class="docker__title">{{item.text}}</div>
      </div>
     <!--  <div class="docker__item">
        <div class="iconfont">&#xe60a;</div>
        <div class="docker__title">购物车</div>
      </div>
      <div class="docker__item">
        <div class="iconfont">&#xe7c5;</div>
        <div class="docker__title">订单</div>
      </div>
      <div class="docker__item">
        <div class="iconfont">&#xe660;</div>
        <div class="docker__title">我的</div>
      </div> -->
    </div>
</template>

<script>
  export default {
    name:'Docker',
    data() {
      return {
        dockerList: [
          {icon: '&#xe6f9;', text: '首页'},
          {icon: '&#xe60a;', text: '购物车'},
          {icon: '&#xe7c5;', text: '订单'},
          {icon: '&#xe660;', text: '我的'},
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
@import '../../style//viriables.scss';
@import '../../style/mixins.scss';
// 容器
  .docker {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 49px;
    // border-top: 1px solid #F1F1F1;
    border-top: 1px solid red;
    // 每项
    .docker__item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 18px;
      // 激活时状态
      &.docker__item--active {
        color: #1FA4FC;
      }
    }
    // 每项名称
    .docker__title {
      font-size: 10px;
      margin-top: 2px;
    }
    // icon图标
    .iconfont {
      font-size: 20px;
    }
  }



</style>
