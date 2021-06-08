<template>
    <!-- <div class="shop"> -->
        <!-- <div class="shop__list" v-for="(item,index) in shopList" :key="index"> -->
        <div class="shop__list" :class="{'shop__list__bd':hideBorderBottom ? false : true}">
            <div class="shop__itemImg"><img :src="item.imgUrl" alt=""></div>
            <div class="shop__detail">
            <div class="shop__detail__name">{{item.title}}</div>
            <div class="shop__detail__sell" >
              <span v-for="(item2,index) in item.tags" :key="index">{{item2}}</span>
            </div>
            <div class="shop__detail__vip">{{item.desc}}</div>
            </div>
        </div>
    <!-- </div> -->

</template>

<script>
  export default {
    name:"ShopInfo",
    props:["item","hideBorderBottom"]
  }
</script>

<style lang="scss" scoped>
    @import '../style/viriables.scss';
    @import '../style//mixins.scss';
    
    .shop__list {
      margin-top: 14px;
      padding-bottom: 14px;
      display: flex;
      &.shop__list__bd {
        border-bottom: 1px solid rgb(114, 247, 6);
      }
      .shop__itemImg {
        width: 56px;
        height: 56px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .shop__detail {
        margin-left: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .shop__detail__name {
          font-size: 16px;
          font-family: "PingFangSC-Regular";
          padding-bottom: 12px;
          font-weight: bold;
          max-width: 230px;
          @include ellipsis;
        }
        .shop__detail__sell {
          padding-bottom: 12px;
          max-width: 230px;
          @include ellipsis;
          span {
            font-size: 13px;
            font-family: "PingFangSC-Regular";
            padding-right: 16px;
          }
        }
        .shop__detail__vip {
          font-size: 13px;
          color: #E93B3B;
          font-family: "PingFangSC-Regular";
          max-width: 230px;
          @include ellipsis;
        }
      }
    }
    

</style>
