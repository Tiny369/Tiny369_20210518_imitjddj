<template>
  <!-- 顶部内容区 -->
  <div >
    <!-- 顶部定位于通知 -->
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
      <div class="goodGrid__item" v-for="(item, index) in iconsList" :key="index">
        <img class="goodGrid_img" :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`" />
        <span class="goodGrid__desc">{{item.desc}}</span>
      </div>
      <!--       <div class="goodGrid__item">
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
      </div> -->
    </div>
    <!-- 分隔栏 -->
    <div class="separate"></div>
  </div>
</template>

<script>
  export default {
    name:'StaticPart',
    data() {
      return {
        iconsList : [
          { imgName: "超市", desc: "超市便利"},
          { imgName: "菜市场", desc: "菜市场"},
          { imgName: "水果店", desc: "水果店"},
          { imgName: "鲜花", desc: "鲜花绿植"},
          { imgName: "医药健康", desc: "医药健康"},
          { imgName: "家居", desc: "家居时尚"},
          { imgName: "蛋糕", desc: "烘培蛋糕"},
          { imgName: "签到", desc: "签到"},
          { imgName: "大牌免运", desc: "大牌免运"},
          { imgName: "红包", desc: "红包套餐"},
        ]
      }
    },
    /* setup (){
      const iconsList = [
        { imgName: "超市", desc: "超市便利"},
        { imgName: "菜市场", desc: "菜市场"},
        { imgName: "水果店", desc: "水果店"},
        { imgName: "鲜花", desc: "鲜花绿植"},
        { imgName: "医药健康", desc: "医药健康"},
        { imgName: "家居", desc: "家居时尚"},
        { imgName: "蛋糕", desc: "烘培蛋糕"},
        { imgName: "签到", desc: "签到"},
        { imgName: "大牌免运", desc: "大牌免运"},
        { imgName: "红包", desc: "红包套餐"},
      ]
      return iconsList
    } */
  }
</script>

<style lang="scss" scoped>
  @import '../../style//viriables.scss';
  @import '../../style/mixins.scss';


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
    

</style>
