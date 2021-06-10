<template>
  <div class="contentContainer">

    <!-- 左侧分类 -->
    <div class="category" >
      <div class="category__item" 
      :class="{'category__item':true,' category__item-active':currentTab === item.tab}"
        v-for="(item,index) in tabData" 
        :key="index" @click="categoryItemClick(item.tab)">{{item.name}}</div>
     <!--  <div class="category__item">秒杀</div>
      <div class="category__item">新鲜水果</div> -->
 <!--      <div class="category__item">休闲食品</div>
      <div class="category__item">时令蔬菜</div>
      <div class="category__item">肉蛋家禽</div> -->
    </div>

    <!-- 右侧内容区 -->
    <div class="detail">
      <div class="detail__item" v-for="(item,index) in detailItemData" :key="index">
        <img class="detail__img" :src="item.imgUrl" alt="">
        <div class="detail__content">
          <div class="detailContent__title">{{item.name}}</div>
          <div class="detailContent__sale">月售{{item.sales}}件</div>
          <div class="detailContent__PriceOrder">
            <span class="detailContent__Price">¥{{item.price}}</span>
            <span class="detailContent__Order">¥{{item.oldPrice}}</span>
            <div class="detailContent__right">
              <span class="detailContent__minus">-</span>
              <span class="detailContent__count">0</span>
              <span class="detailContent__add">+</span>
            </div>
          </div>
        </div>
      </div>
     <!--  <div class="detail__item">
        <img class="detail__img" src="https://img30.360buyimg.com/n1//s160x160_jfs/t1/193337/4/7165/45559/60beeafaE762cc46e/6f3aa421749564c8.jpg" alt="">
        <div class="detail__content">
          <div class="detailContent__title">番茄250g/份</div>
          <div class="detailContent__sale">月售10件</div>
          <div class="detailContent__PriceOrder">
            <span class="detailContent__Price">¥33.6</span>
            <span class="detailContent__Order">¥33.6</span>
            <div class="detailContent__right">
              <span class="detailContent__minus">-</span>
              <span class="detailContent__count">0</span>
              <span class="detailContent__add">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="detail__item">
        <img class="detail__img" src="https://img30.360buyimg.com/n1//s160x160_jfs/t1/193337/4/7165/45559/60beeafaE762cc46e/6f3aa421749564c8.jpg" alt="">
        <div class="detail__content">
          <div class="detailContent__title">番茄250g/份</div>
          <div class="detailContent__sale">月售10件</div>
          <div class="detailContent__PriceOrder">
            <span class="detailContent__Price">¥33.6</span>
            <span class="detailContent__Order">¥33.6</span>
            <div class="detailContent__right">
              <span class="detailContent__minus">-</span>
              <span class="detailContent__count">0</span>
              <span class="detailContent__add">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="detail__item">
        <img class="detail__img" src="https://img30.360buyimg.com/n1//s160x160_jfs/t1/193337/4/7165/45559/60beeafaE762cc46e/6f3aa421749564c8.jpg" alt="">
        <div class="detail__content">
          <div class="detailContent__title">番茄250g/份</div>
          <div class="detailContent__sale">月售10件</div>
          <div class="detailContent__PriceOrder">
            <span class="detailContent__Price">¥33.6</span>
            <span class="detailContent__Order">¥33.6</span>
            <div class="detailContent__right">
              <span class="detailContent__minus">-</span>
              <span class="detailContent__count">0</span>
              <span class="detailContent__add">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="detail__item">
        <img class="detail__img" src="https://img30.360buyimg.com/n1//s160x160_jfs/t1/193337/4/7165/45559/60beeafaE762cc46e/6f3aa421749564c8.jpg" alt="">
        <div class="detail__content">
          <div class="detailContent__title">番茄250g/份</div>
          <div class="detailContent__sale">月售10件</div>
          <div class="detailContent__PriceOrder">
            <span class="detailContent__Price">¥33.6</span>
            <span class="detailContent__Order">¥33.6</span>
            <div class="detailContent__right">
              <span class="detailContent__minus">-</span>
              <span class="detailContent__count">0</span>
              <span class="detailContent__add">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="detail__item">
        <img class="detail__img" src="https://img30.360buyimg.com/n1//s160x160_jfs/t1/193337/4/7165/45559/60beeafaE762cc46e/6f3aa421749564c8.jpg" alt="">
        <div class="detail__content">
          <div class="detailContent__title">番茄250g/份</div>
          <div class="detailContent__sale">月售10件</div>
          <div class="detailContent__PriceOrder">
            <span class="detailContent__Price">¥33.6</span>
            <span class="detailContent__Order">¥33.6</span>
            <div class="detailContent__right">
              <span class="detailContent__minus">-</span>
              <span class="detailContent__count">0</span>
              <span class="detailContent__add">+</span>
            </div>
          </div>
        </div>
      </div> -->
      
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import request from '../../util/request.js'
  export default {
    data() {
      return {
        // 列表数据
        detailItemData:[],
        // 分类项值
        tabData:[
          { name:'全部商品',tab:'all'},
          { name:'秒杀',tab:'seckill'},
          { name:'新鲜水果',tab:'fruit'},
        ],
        currentTab:'all'
      }
    },
    name:"Content",
    methods: {
      categoryItemClick (tab){
        this.getDetailItemData(tab)
        // this.currentTab = this.tabData[0].tab
        this.currentTab = tab
        // console.log(this.currentTab);
      },
      // 请求商品列表信息
      async getDetailItemData(tab) {
        console.log({tab});
        let shopId = this.$route.params.id
        let result = await request(`/api/shop/${shopId}/products?tab=${tab}`)
        if(result.errno === 0 && result.data.length){
          this.detailItemData = result.data
        }
        // console.log(result);
      }
    },
    mounted() {
      // 获取商品列表信息  tab 值是: all 或 seckill 或 fruit
      this.getDetailItemData('all')
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../style//mixins.scss';
  .contentContainer {
    display: flex;
    position: absolute;
    top: 150px;
    left: 0;
    right: 0;
    bottom: 50px;
    // background-color: rgb(181, 223, 240);
  }
  // 左侧分类
  .category {
    width: 76px;
    // background-color: rgb(215, 233, 215);
    overflow-y: scroll;
    // 每一分类项
    .category__item {
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 14px;
      // border-bottom: 1px solid rgb(150, 143, 143);
      &.category__item-active {
        background-color: rgb(197, 233, 197);
      }
    }
  }
  // 右侧详情
  .detail {
    flex: 1;
    overflow-y: scroll;
    padding-top: 8px;
    // 详情列表的每一项
    .detail__item {
      display: flex;
      margin-bottom: 25px;
      .detail__img {
        width: 68px;
        height: 68px;
        margin: 0 16px;
      }
      .detail__content {
        flex: 1;
        .detailContent__title {
          max-width: 150px;
          font-size: 14px;
          font-family: "PingFangSC-Medium";
          color: #333333;
          line-height: 20px;
          @include ellipsis; 
        }
        .detailContent__sale {
          margin: 6px 0;
          font-size: 12px;
          line-height: 16px;
          color: #333333;
        }
        .detailContent__PriceOrder {
          display: flex;
          .detailContent__Price {
            font-size: 14px;
            color: #E93B3B;
            line-height: 20px;
          }
          .detailContent__Order {
            margin-left: 6px;
            font-size: 10px;
            line-height: 20px;
            color: #999999;
            text-decoration: line-through;
          }
          .detailContent__right {
            flex: 1;
            line-height: 20px;
            margin-left: 36px;
            display: flex;
            .detailContent__minus,.detailContent__add {
              width: 17px;
              height: 17px;
              border: 1px solid #666666;
              color: #666666;
              border-radius: 50%;
              text-align: center;
              line-height: 14px;
            }
            .detailContent__minus {
              font-size: 26px;
            }
            .detailContent__add {
              font-size: 21px;
              background-color: #0091FF;
              color: white;
              border: 1px solid #0091FF;
            }
            .detailContent__count {
              padding: 0 6px;
            }
          }
        }
      }
    }
  }
 
</style>
