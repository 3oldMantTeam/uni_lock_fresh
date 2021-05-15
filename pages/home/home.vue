<template>
  <view class="page">
    <!-- 轮播图区域 -->
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
      <swiper-item v-for="item in swiperList" :key="item.id">
        <navigator class="swiper-item" :url="'/subpackage/goods_detail/goods_detail?id=' + item.id"><image :src="item.img_src" mode=""></image></navigator>
      </swiper-item>
    </swiper>
    <!-- nav区域 -->
    <uni-card>
      <view class="nav-list">
        <view class="nav-item" v-for="item in navList" :key="item.id" @click="navClickHandler(item)">
          <image :src="item.icon_src" mode="" class="nav-img"></image>
          <text>{{ item.name }}</text>
        </view>
      </view>
    </uni-card>

    <!-- 楼层区域 -->
    <!-- 楼层低容器 -->
    <view class="floor-list">
      <!--一楼层的item项 -->
      <view class="floor-item">
        <!-- 楼层的标题 -->
        <text class="good">好货推荐</text>
        <view class="goods_items" v-for="item in flooData" :key="item.id">
          <uni-row>
            <uni-card class="card">
              <uni-col :span="10">
                <navigator class="item_img" :url="'/subpackage/goods_detail/goods_detail?id=' + item.id"><image :src="item.img_src" mode=""></image></navigator>
              </uni-col>
              <uni-col :span="14">
                <view class="desc">
                  <view>好吃的水果海鲜</view>
                
                  <view class="about">
                    <view class="ad-tips-good">
                      好货推荐
                    </view>
                    <text class="price">￥19.9</text>
                    <button type="primary" size="mini" class="joinCart">加入购物车</button>
                  </view>
                </view>
              </uni-col>
            </uni-card>
          </uni-row>
        </view>
      </view>
    <!-- 二楼的item -->
    <view class="floor-item">
      <!-- 楼层的标题 -->
      <text class="good">热销好货</text>
      <view class="goods_items" v-for="item in flooData" :key="item.id">
        <uni-row>
          <uni-card class="card">
            <uni-col :span="10">
              <navigator class="item_img" :url="'/subpackage/goods_detail/goods_detail?id=' + item.id"><image :src="item.img_src" mode=""></image></navigator>
            </uni-col>
            <uni-col :span="14">
              <view class="desc">
                <view>好吃的水果海鲜</view>
                <view class="about">
                  <view class="ad-tips-hot">
                    热销好货
                  </view>
                  <text class="price">￥19.9</text>
                  <button type="primary" size="mini" class="joinCart">加入购物车</button>
                </view>
              </view>
            </uni-col>
          </uni-card>
        </uni-row>
      </view>
    </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      swiperList: [
        {
          id: 1,
          img_src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4262332684,2207673809&fm=26&gp=0.jpg'
        },
        {
          id: 2,
          img_src:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e7b059818a5e0000002129aa095f.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623595760&t=998122746eb7893751ad1765cc7b85d3'
        },
        {
          id: 3,
          img_src:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01af9b5bc15effa801213deadd98a8.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623595760&t=38a744372db37fae3b967da522220807'
        },
        {
          id: 3,
          img_src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1820531803,3210055793&fm=26&gp=0.jpg'
        }
      ],
      navList: [
        {
          id: 1,
          icon_src: '../../static/nav-icon/1.png',
          name: '分类'
        },
        {
          id: 2,
          icon_src: '../../static/nav-icon/2.png',
          name: '优惠购'
        },
        {
          id: 3,
          icon_src: '../../static/nav-icon/3.png',
          name: '限时购'
        },
        {
          id: 4,
          icon_src: '../../static/nav-icon/4.png',
          name: '半日达'
        }
      ],
      flooData: [
        {
          id: 1,
          img_src: 'https://img.alicdn.com/bao/uploaded/i2/2207688554153/O1CN01lUJOtu1gY7TT4qsyN_!!2207688554153.png',
          title: '好货推荐'
        },
        {
          id: 2,
          img_src: 'https://img.alicdn.com/bao/uploaded/i4/2627785630/O1CN01dBKY1N1rSaUKV5Co1_!!2627785630.jpg',
          title: '好货推荐'
        },
        {
          id: 3,
          img_src: 'https://img.alicdn.com/bao/uploaded/i3/2478322307/O1CN01JUZJpW1SueJtcI1tf_!!2478322307.png',
          title: '好货推荐'
        },
        {
          id: 4,
          img_src: 'https://img.alicdn.com/bao/uploaded/i4/2209076831612/O1CN01cL2MfK1NmL4vOarP1_!!2209076831612.jpg',
          title: '好货推荐'
        },
        {
          id: 5,
          img_src: 'https://img.alicdn.com/bao/uploaded/i1/2772080898/O1CN01ct6FNP1IVKDwgvaIZ_!!2772080898.jpg',
          title: '好货推荐'
        },
        {
          id: 6,
          img_src: 'https://img.alicdn.com/bao/uploaded/i2/2772080898/O1CN01oy15X41IVKJwEXR1F_!!2772080898.jpg',
          title: '好货推荐'
        },
        {
          id: 7,
          img_src: 'https://img.alicdn.com/bao/uploaded/i3/4120851548/O1CN01VONGTl1NJ1ajFVXBf_!!4120851548.jpg',
          title: '好货推荐'
        },
        {
          id: 8,
          img_src: 'https://img.alicdn.com/bao/uploaded/i3/2208511566643/O1CN01SUXf2s1ywXj1Pc1Vu_!!2208511566643.jpg',
          title: '好货推荐'
        }
      ]
    };
  },
  methods: {
    navClickHandler(item) {
      //判断点击的是那个nav
      if (item.name === '分类') {
        uni.switchTab({
          url: '/pages/cate/cate'
        });
      }
     
    }
  }
};
</script>

<style lang="scss">
.page {
  background-color: #f5f5f5;
}
swiper {
  height: 330rpx;
  .swiper-item,
  image {
    width: 100%;
    height: 100%;
  }
}
.nav-list {
  display: flex;
  justify-content: space-around;
  margin: 15px 0;

  .nav-img {
    width: 100rpx;
    height: 110rpx;
  }
}
.nav-item text {
  display: block;
  text-align: center;
}
.floor-item .good {
  font-size: 40rpx;
  font-weight: bold;
  margin: 60rpx 30rpx;
}
.floor-item image {
  width: 250rpx;
  height: 250rpx;
}

.about {
  position: relative;
  display: flex;
  justify-content: space-around;
  margin-top: 140rpx;
  align-items: center;
  .price {
    font-size: 38rpx;
    line-height: 38rpx;
    font-weight: bold;
    color: #c00000;
  }
  .joinCart {
    margin-right: 5rpx;
    border-radius: 36rpx;
    font-size: 24rpx;
    text-align: center;
    background-color: #dc7004;
  }
}
.ad-tips-good {
  position: absolute;
  background-color: #67C23A;
  width: 140rpx;
  font-size: 22rpx;
  text-align: center;
  border-radius: 10rpx;
  top: -45rpx;
  left: -8rpx;
}
.ad-tips-hot {
  position: absolute;
  background-color: #F56C6C;
  width: 140rpx;
  font-size: 22rpx;
  text-align: center;
  border-radius: 10rpx;
  top: -45rpx;
  left: -8rpx;
}
</style>
