<template>
    <!-- 附近店铺列表 -->
    <div class="nearby">
        <div class="nearby__title">附近店铺</div>
        <ShopInfo v-for="(item,index) in nearbyList" :key="index" :item="item" />
        <!-- <div class="nearby__list" v-for="(item,index) in nearbyList" :key="index">
            <div class="nearby__itemImg"><img :src="item.imgUrl" alt=""></div>
            <div class="nearby__detail">
            <div class="nearby__detail__name">{{item.title}}</div> -->

            <!-- 动态数据 -->
            <!-- <div class="nearby__detail__name">{{item.name}}</div> -->

            <!-- <div class="nearby__detail__sell" >
                <span v-for="(item2,index) in item.tags" :key="index">{{item2}}</span> -->

              <!-- 动态数据 -->
              <!--  <span >月售:{{item.sales}}</span>
                <span >起送:{{item.expressPrice}}</span>
                <span >基础运费:{{item.expressLimit}}</span> -->

            <!-- </div> -->
            <!-- <div class="nearby__detail__vip">{{item.desc}}</div> -->

            <!-- 动态数据 -->
            <!-- <div class="nearby__detail__vip">{{item.slogan}}</div> -->

            <!-- </div> -->
        <!-- </div> -->
       <!--  <div class="nearby__list">
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
        </div> -->
    </div>

</template>

<script>
  import request from '../../util/request.js'
  import ShopInfo from '../../components/ShopInfo.vue'
  export default {
    components:{
      ShopInfo
    },
    name:"Nearby",
    data() {
      return {
        // 自定义附近商家数据
        nearbyList: [
          {
            id: 1,
            imgUrl: 'https://img30.360buyimg.com/vendersettle/s120x120_jfs/t1/181887/35/6221/81162/60b0f50aE50e95668/d98645c5e41281fb.png',
            title: '沃尔玛',
            tags:['月售1万+', '起送¥0', '基础运费¥5'],
            desc: 'VIP尊享满89元减4元运费券（每月3张）'
          }, 
          {
            id: 2,
            imgUrl: 'https://img30.360buyimg.com/vendersettle/s120x120_jfs/t1/154191/22/20408/133000/60b0f5fdEe9406045/44a52949175ab2f7.png',
            title: '山姆会员商店',
            tags:['月售2千+', '起送¥0', '基础运费¥5'],
            desc: '联合利华洗护满10减5'
          },
          {
            id: 3,
            imgUrl: 'https://img30.360buyimg.com/vendersettle/s120x120_jfs/t1/178823/27/6751/104457/60b529b0Ed4f444c9/5308c976faf9151d.png',
            title: '叮当快药(送药274药房)',
            tags:['月售9百+', '起送¥0', '基础运费¥1'],
            desc: '商家会员享满39元减4元运费（每月1次），享满69元减4元运费（每月3次）'
          },
          {
            id: 4,
            imgUrl: 'https://img30.360buyimg.com/vendersettle/s120x120_jfs/t1/188286/17/5925/73188/60b5178eE2c90ad9f/32123ae964f272c3.png',
            title: '永旺-城市广场店',
            tags:['月售2千+', '起送¥5', '基础运费¥5'],
            desc: '杰士邦满45减5'
          },
          {
            id: 5,
            imgUrl: 'https://img30.360buyimg.com/vendersettle/s120x120_jfs/t1/178535/39/6327/74596/60b0f7c2E879c4a5d/cb4af1920dac079e.png',
            title: 'Ole精品超市（深业上城店）',
            tags:['月售3千+', '起送¥20', '基础运费¥5'],
            desc: '其他品牌进口纸尿裤满358减110'
          },
          {
            id: 6,
            imgUrl: 'https://img30.360buyimg.com/vendersettle/s120x120_jfs/t1/180534/35/6392/78584/60b0f7c2E7d59e34c/3bf27783d81f52fe.png',
            title: '万家MART-彩田店',
            tags:['月售3千+', '起送¥0', '基础运费¥5'],
            desc: '商家会员享满119元减4元运费（每月1次），享满129元减4元运费（每月1次），享满149元减4元运费（每月1次）'
          },
        ],
        // 附近商家数据（动态数据）
        // nearbyList:[]
      }
    },
    async mounted() {
      // 获取商家信息数据
      let result = await request('/api/shop/hot-list',{},'get',{'Content-Type': 'application/json'})
      // 动态数据赋值
      // this.nearbyList = result.data
    },
  }
</script>

<style lang="scss" scoped>
    @import '../../style//viriables.scss';
    @import '../../style/mixins.scss';
    
    // 附近店铺列表
    .nearby {
      margin-top: 16px;
      .nearby__title {
        font-size: 18px;
        font-weight: bold;
      }
     /*  .nearby__list {
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
      } */
    }

</style>
