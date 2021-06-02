<template>
  <div class="indexContainer">

    <!-- 内容区 -->
    <div class="wapper">
      <!-- 头部 -->
      <div class="head">
        <span class="iconfont head__icon">&#xe62c;</span>
        <span class="head__ad">北京理工大学国防科技园2号楼10层</span>
        <span class="iconfont head__icon">&#xe650;</span>
      </div>
      <!-- 搜索栏 -->
      <div class="search">
        <i class="iconfont search__icon">&#xe60b;</i>
        <input class="searchInput" type="text" placeholder="山姆会员商店优惠商品">
      </div>
      <!-- 大图 -->
      <div class="banner">
        <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="">
      </div>
      <!-- 网格 -->
      <div class="goodGrid">
        <div class="goodGrid__item">
          <img class="goodGrid_img" src="http://www.dell-lee.com/imgs/vue3/超市.png" />
          <span class="goodGrid__desc">超市便利</span>
        </div>
        <div class="goodGrid__item">
          <img class="goodGrid_img" src="http://www.dell-lee.com/imgs/vue3/菜市场.png" />
          <span class="goodGrid__desc">菜市场</span>
        </div>
        <div class="goodGrid__item">
          <img class="goodGrid_img" src="http://www.dell-lee.com/imgs/vue3/水果店.png" />
          <span class="goodGrid__desc">水果店</span>
        </div>
        <div class="goodGrid__item">
          <img class="goodGrid_img" src="http://www.dell-lee.com/imgs/vue3/鲜花.png" />
          <span class="goodGrid__desc">鲜花绿植</span>
        </div>
        <div class="goodGrid__item">
          <img class="goodGrid_img" src="http://www.dell-lee.com/imgs/vue3/医药健康.png" />
          <span class="goodGrid__desc">医药健康</span>
        </div>
        <div class="goodGrid__item">
          <img class="goodGrid_img" src="http://www.dell-lee.com/imgs/vue3/家居.png" />
          <span class="goodGrid__desc">家居时尚</span>
        </div>
        <div class="goodGrid__item">
          <img class="goodGrid_img" src="http://www.dell-lee.com/imgs/vue3/蛋糕.png" />
          <span class="goodGrid__desc">烘焙蛋糕</span>
        </div>
        <div class="goodGrid__item">
          <img class="goodGrid_img" src="http://www.dell-lee.com/imgs/vue3/签到.png" />
          <span class="goodGrid__desc">签到</span>
        </div>
        <div class="goodGrid__item">
          <img class="goodGrid_img" src="http://www.dell-lee.com/imgs/vue3/大牌免运.png" />
          <span class="goodGrid__desc">大牌免运</span>
        </div>
        <div class="goodGrid__item">
          <img class="goodGrid_img" src="http://www.dell-lee.com/imgs/vue3/红包.png" />
          <span class="goodGrid__desc">红包套餐</span>
        </div>
      </div>
      <!-- 分隔栏 -->
      <div class="separate"></div>
      <!-- 列表 -->
      <div class="nearby">
        <div class="nearby__title">附近店铺</div>
        <div class="nearby__list">
          <div class="nearby__itemImg"><img src="https://img30.360buyimg.com/vendersettle/s120x120_jfs/t1/181887/35/6221/81162/60b0f50aE50e95668/d98645c5e41281fb.png" alt=""></div>
          <div class="nearby__detail">
            <div class="nearby__detail__name">沃尔玛</div>
            <div class="nearby__detail__sell">
              <span>月售1万+</span>
              <span>起送¥0</span>
              <span>基础运费¥5</span>
            </div>
            <div class="nearby__detail__vip">VIP尊享满89元减4元运费券（每月3张）</div>
          </div>
        </div>
        <div class="nearby__list">
          <div class="nearby__itemImg"><img src="https://img30.360buyimg.com/vendersettle/s120x120_jfs/t1/154191/22/20408/133000/60b0f5fdEe9406045/44a52949175ab2f7.png" alt=""></div>
          <div class="nearby__detail">
            <div class="nearby__detail__name">山姆会员商店</div>
            <div class="nearby__detail__sell">
              <span>月售2千+</span>
              <span>起送¥0</span>
              <span>基础运费¥5</span>
            </div>
            <div class="nearby__detail__vip">联合利华洗护满10减5</div>
          </div>
        </div>
        <div class="nearby__list">
          <div class="nearby__itemImg"><img src="https://img30.360buyimg.com/vendersettle/s120x120_jfs/t1/178823/27/6751/104457/60b529b0Ed4f444c9/5308c976faf9151d.png" alt=""></div>
          <div class="nearby__detail">
            <div class="nearby__detail__name">叮当快药(送药274药房)</div>
            <div class="nearby__detail__sell">
              <span>月售9百+</span>
              <span>起送¥0</span>
              <span>基础运费¥1</span>
            </div>
            <div class="nearby__detail__vip">商家会员享满39元减4元运费（每月1次），享满69元减4元运费（每月3次）</div>
          </div>
        </div>
        <div class="nearby__list">
          <div class="nearby__itemImg"><img src="https://img30.360buyimg.com/vendersettle/s120x120_jfs/t1/188286/17/5925/73188/60b5178eE2c90ad9f/32123ae964f272c3.png" alt=""></div>
          <div class="nearby__detail">
            <div class="nearby__detail__name">永旺-城市广场店</div>
            <div class="nearby__detail__sell">
              <span>月售2千+</span>
              <span>起送¥5</span>
              <span>基础运费¥5</span>
            </div>
            <div class="nearby__detail__vip">杰士邦满45减5,满69减10</div>
          </div>
        </div>
        <div class="nearby__list">
          <div class="nearby__itemImg"><img src="https://img30.360buyimg.com/vendersettle/s120x120_jfs/t1/178535/39/6327/74596/60b0f7c2E879c4a5d/cb4af1920dac079e.png" alt=""></div>
          <div class="nearby__detail">
            <div class="nearby__detail__name">Ole精品超市（深业上城店）</div>
            <div class="nearby__detail__sell">
              <span>月售3千+</span>
              <span>起送¥20</span>
              <span>基础运费¥5</span>
            </div>
            <div class="nearby__detail__vip">其他品牌进口纸尿裤满358减110</div>
          </div>
        </div>
        <div class="nearby__list">
          <div class="nearby__itemImg"><img src="https://img30.360buyimg.com/vendersettle/s120x120_jfs/t1/180534/35/6392/78584/60b0f7c2E7d59e34c/3bf27783d81f52fe.png" alt=""></div>
          <div class="nearby__detail">
            <div class="nearby__detail__name">万家MART-彩田店</div>
            <div class="nearby__detail__sell">
              <span>月售3千+</span>
              <span>起送¥0</span>
              <span>基础运费¥5</span>
            </div>
            <div class="nearby__detail__vip">商家会员享满119元减4元运费（每月1次），享满129元减4元运费（每月1次），享满149元减4元运费（每月1次）</div>
          </div>
        </div>
      </div>
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
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 50px;
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
  // 网格
  .goodGrid {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 16px;
    .goodGrid__item {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 16px;
      .goodGrid_img {
        width: 40px;
        height: 40px;
      }
      .goodGrid__desc {
        padding-top: 6px;
      }
    }
  }
  // 分隔栏
  .separate {
    margin: 0 -18px;
    height: 10px;
    background-color: rgb(216, 211, 211);
  }
  // 附近店铺列表
  .nearby {
    margin-top: 16px;
    .nearby__title {
      font-size: 18px;
      font-weight: bold;
    }
    .nearby__list {
      margin-top: 14px;
      padding-bottom: 14px;
      display: flex;
      .nearby__itemImg {
        width: 56px;
        height: 56px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .nearby__detail {
        margin-left: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .nearby__detail__name {
          font-size: 16px;
          font-family: "PingFangSC-Regular";
          padding-bottom: 12px;
          font-weight: bold;
          max-width: 230px;
          @include ellipsis;
        }
        .nearby__detail__sell {
          padding-bottom: 12px;
          max-width: 230px;
          @include ellipsis;
          span {
            font-size: 13px;
            font-family: "PingFangSC-Regular";
            padding-right: 16px;
          }
        }
        .nearby__detail__vip {
          font-size: 13px;
          color: #E93B3B;
          font-family: "PingFangSC-Regular";
          max-width: 230px;
          @include ellipsis;
        }
      }
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
