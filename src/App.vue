<template>
  <div>

    <!-- 内容区 -->
    <div class="wapper">
      <div class="head">
        <span class="iconfont head__icon">&#xe62c;</span>
        <span class="head__ad">北京理工大学国防科技园2号楼10层</span>
        <span class="iconfont head__icon">&#xe650;</span>
      </div>
      <div class="search">
        <i class="iconfont search__icon">&#xe60b;</i>
        <input class="searchInput" type="text" placeholder="山姆会员商店优惠商品">
      </div>
      <div class="banner">
        <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="">
      </div>
      <div>12345646</div>
    </div>

    <!-- 底部分类栏 -->
    <div class="docker">
      <div class="docker__item docker__item--active">
        <div class="iconfont">&#xe6f9;</div>
        <div class="docker__title">首页</div>
      </div>
      <div class="docker__item">
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
      </div>
    </div>

  </div>
</template>

<style lang="scss" >
@import './style//viriables.scss';
@import './style/mixins.scss';

// 内容区
.wapper {
  padding: 0 18px;
  width: 100%;
  box-sizing:border-box;
  // 顶部定位于通知
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 22px;
    padding: 16px 0;
    color: $content-fontColor;
    .head__icon {
      font-size: 20px;
    }
    .head__ad {
      font-size: 16px;
      /* overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;*/
      @include ellipsis; 
    }
  }
  // 搜索栏
  .search {
    height: 32px;
    position: relative;
    margin-bottom: 12px;
    .searchInput {
      height: 32px;
      width: 100%;
      outline: none;
      border:1px solid rgb(185, 183, 183);
      padding-left: 44px;
      box-sizing: border-box;
    }
    .search__icon {
      position: absolute;
      top: 50%;
      left: 14px;
      transform: translateY(-50%);
    }
  }
  // 大图
  .banner {
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;
    .banner__img {
      width: 100%;
    }
  }

}


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
