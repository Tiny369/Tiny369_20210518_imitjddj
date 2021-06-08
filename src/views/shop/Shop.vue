<template>
  <div class="shopContainer">
    <div class="shop__head">
      <div class="shop__back iconfont" @click="$router.back()">&#xe677;</div>
      <div class="shop__serach">
        <div class="shop__serach__icon iconfont">&#xe603;</div>
        <input class="shop__serach__input" placeholder="请输入商品名称搜索" />
      </div>
    </div>
    <ShopInfo :item="itemData" :hideBorderBottom="true" v-show="itemData.imgUrl"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import ShopInfo from '../../components/ShopInfo.vue'
  import request from '../../util/request.js'
  export default {
    name:'Shop',
    components:{
      ShopInfo
    },
    data() {
      return {
        itemData: {
          /* id: 1,
          imgUrl: 'https://img30.360buyimg.com/vendersettle/s120x120_jfs/t1/181887/35/6221/81162/60b0f50aE50e95668/d98645c5e41281fb.png',
          title: '沃尔玛',
          tags:['月售1万+', '起送¥0', '基础运费¥5'],
          desc: 'VIP尊享满89元减4元运费券（每月3张）' */
        }, 
       
      }
    },
    async mounted() {
      // 根据路由id，发送获取商家详情的请求
      /* let result = await request('/api/shop/2')
      if(result.errno === 0){
        this.item = result.data
        console.log(result);
      } */

      // 自定义数据
      let propsItemData = [
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
      ] 
      let index = this.$route.params.id
      this.itemData = propsItemData[index]
    },
  }
</script>

<style lang="scss" scoped>
  .shopContainer {
    padding: 0 18px;
  }
  // 
  .shop__head {
    display: flex;
    height: 32px;
    margin: 16px 0;
    .shop__back {
      font-size: 20px;
      line-height: 32px;
      color: #B7B7B7;
    }
    .shop__serach {
      margin-left: 16px;
      flex: 1;
      display: flex;
      position: relative;
      .shop__serach__icon {
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
        color: #B7B7B7;
      }
      .shop__serach__input {
        width: 100%;
        outline: none;
        border: 1px solid rgb(192, 173, 173);
        border-radius: 5px;
        padding-left: 44px;
        font-size: 16px;
        &::placeholder {
          color: #333333;
          font-size: 14px;
        }
      }
    }
  }
</style>
