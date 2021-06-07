<template>
    <div class="nearby">
        <!-- <div class="nearby__list" v-for="(item,index) in nearbyList" :key="index"> -->
        <div class="nearby__list">
            <div class="nearby__itemImg"><img :src="item.imgUrl" alt=""></div>
            <div class="nearby__detail">
            <div class="nearby__detail__name">{{item.title}}</div>
            <div class="nearby__detail__sell" >
              <span v-for="(item2,index) in item.tags" :key="index">{{item2}}</span>
            </div>
            <div class="nearby__detail__vip">{{item.desc}}</div>
            </div>
        </div>
    </div>

</template>

<script>
  export default {
    name:"Nearby",
    props:["item"]
    
  }
</script>

<style lang="scss" scoped>
    @import '../style/viriables.scss';
    @import '../style//mixins.scss';
    
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
    

</style>
