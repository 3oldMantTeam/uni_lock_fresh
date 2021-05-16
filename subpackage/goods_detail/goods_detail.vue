<template>
  <view class="goods-detail-container">
    <!-- 轮播图区域 -->
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
      <swiper-item v-for="(item, i) in goods_info" :key="i"> <image :src="item.goods_banner" @click="preview(i)"></image></swiper-item>
    </swiper>
    <!-- 商品信息区域 -->
    <view class="goods_info_box">
      <!-- 价格 -->
      <view class="price" v-if="goods_info[0].goods_name">￥{{goods_info[0].goods_price}}</view>
      <!-- 信息主体区域 -->
      <view class="goods_info_body">
        <!-- 商品名称 -->
        <view class="goods_name">{{goods_info[0].goods_name}}</view>
        <!-- 收藏 -->
        <view class="favi">
          <uni-icons type="star" size="18"></uni-icons>
          <text>收藏</text>
        </view>
      </view>
      <!-- 运费 -->
      <view class="yf">
        快递：免运费
      </view>
    </view>
 <!--   //图文介绍区域 -->
  <view class="desc_img_box">
    <image :src="item.desc_img" mode="" v-for="(item,i) in goods_info" :key="i"  class="desc_img"></image>
  </view>
  <!-- 商品导航区域 -->
  <view class="goods_nav">
    <uni-goods-nav :fill="true" :options="options" :button-group="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
  </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      goods_info: [
        {
          goods_id: 1,
          goods_banner: 'https://img.alicdn.com/imgextra/i1/3449229323/O1CN012tSlGb2IjzC005YQK_!!0-item_pic.jpg_430x430q90.jpg',
          goods_price: 39.9,
          goods_name:"超级无敌好吃的蔬菜，水果，海鲜小程序平台，价格美丽，品质动人！",
          desc_img:"https://img.alicdn.com/imgextra/i2/3449229323/O1CN01pbCIN62IjzC6tdM5r_!!3449229323.png",
        },
        {
          goods_id: 2,
          goods_banner: 'https://img.alicdn.com/imgextra/i4/3449229323/O1CN01R5C8dI2IjzBtxvkyG_!!3449229323.jpg_430x430q90.jpg',
          goods_price: 39.9,
          goods_name:"超级无敌好吃的蔬菜，水果，海鲜小程序平台，价格美丽，品质动人！",
            desc_img:"https://img.alicdn.com/imgextra/i1/3449229323/O1CN01UrwkCF2IjzBxpmRkE_!!3449229323.jpg",
        },
        {
          goods_id: 3,
          goods_banner: 'https://img.alicdn.com/imgextra/i2/3449229323/O1CN01evmfGN2Ijz3WV9BYE_!!3449229323.jpg_430x430q90.jpg',
          goods_price: 39.9,
          goods_name:"超级无敌好吃的蔬菜，水果，海鲜小程序平台，价格美丽，品质动人！",
            desc_img:"https://img.alicdn.com/imgextra/i1/3449229323/O1CN01LNnsKh2IjzBxpmiMt_!!3449229323.jpg",
        },
        {
          goods_id: 4,
          goods_banner: 'https://img.alicdn.com/imgextra/i2/3449229323/O1CN01XUqV6l2Ijz3P1QFfl_!!3449229323.jpg_430x430q90.jpg',
          goods_price: 39.9,
          goods_name:"超级无敌好吃的蔬菜，水果，海鲜小程序平台，价格美丽，品质动人！",
            desc_img:"https://img.alicdn.com/imgextra/i1/3449229323/O1CN01muHB9V2IjzBuTSVlx_!!3449229323.jpg",
        }
      ],
      // 左侧按钮组的配置对象
          options: [{
            icon: 'shop',
            text: '店铺'
          }, {
            icon: 'cart',
            text: '购物车',
            info: 2
          }],
          // 右侧按钮组的配置对象
          buttonGroup: [{
              text: '加入购物车',
              backgroundColor: '#ff0000',
              color: '#fff'
            },
            {
              text: '立即购买',
              backgroundColor: '#ffa200',
              color: '#fff'
            }
          ]
    };
  },
  methods: {
    // 实现轮播图的预览效果
    preview(i) {
      // 调用 uni.previewImage() 方法预览图片
      uni.previewImage({
        // 预览时，默认显示图片的索引
        current: i,

        urls: [
          'https://img.alicdn.com/imgextra/i1/3449229323/O1CN012tSlGb2IjzC005YQK_!!0-item_pic.jpg_430x430q90.jpg',
          'https://img.alicdn.com/imgextra/i4/3449229323/O1CN01R5C8dI2IjzBtxvkyG_!!3449229323.jpg_430x430q90.jpg',
          'https://img.alicdn.com/imgextra/i2/3449229323/O1CN01evmfGN2Ijz3WV9BYE_!!3449229323.jpg_430x430q90.jpg',
          'https://img.alicdn.com/imgextra/i2/3449229323/O1CN01XUqV6l2Ijz3P1QFfl_!!3449229323.jpg_430x430q90.jpg'
        ]
      });
    },
    onClick(e) {
     if(e.content.text==="购物车"){
       uni.switchTab({
          url:"/pages/cart/cart"
       })
     }
    },
    buttonClick(){
      
    }
  }
};
</script>

<style lang="scss">
swiper {
  height: 750rpx;

  image {
    width: 100%;
    height: 100%;
  }
}
// 商品信息区域的样式
.goods_info_box {
  padding: 10px;
  padding-right: 0;

  .price {
    color: #c00000;
    font-size: 18px;
    margin: 10px 0;
  }

  .goods_info_body {
    display: flex;
    justify-content: space-between;

    .goods_name {
      font-size: 13px;
      padding-right: 10px;
    }
    // 收藏区域
    .favi {
      width: 120px;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-left: 1px solid #efefef;
      color: gray;
    }
  }

  // 运费
  .yf {
    margin: 10px 0;
    font-size: 12px;
    color: gray;
  }
}
.desc_img_box {
 
  margin-top: 15px;
  .desc_img{
   display: block;
   width: 100%;
  }
}
.goods_nav {
  position: fixed;

bottom: 0;
  left: 0;
  width: 100%;
}
.goods-detail-container {
  padding-bottom: 50px;
}
</style>
