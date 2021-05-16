<template>
  <view class="page_goods_list">
    <view class="goods-list">
      <block v-for="(item, i) in goodsList" :key="item.id">
        <uni-card>
          <view class="goods-item">
            <!-- 左侧的合子 -->
            <view class="goods-item-left">
              <image :src="item.img_src" class="item-pic" @click="gotoDetail(item)"></image></view>
            <!-- 右侧的盒子 -->
            <view class="goods-item-right">
              <!-- 商品标题 -->
              <view class="goods-name">{{ item.desc }}</view>
              <view class="goods-info-box">
                <!-- 商品价格 -->
                <view class="goods-price">￥{{ item.price }}</view>
                <button type="primary" class="joinCart" size="mini">加入购物车</button>
              </view>
            </view>
          </view>
        </uni-card>
       
      </block>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 请求参数对象
      queryObj: {
        // 查询关键词
        query: '',
        // 商品分类Id
        cid: '',
        // 页码值
        pagenum: 1,
        // 每页显示多少条数据
        pagesize: 10
      },
      goodsList: [
        {
          id: 1,
          img_src: 'https://img.alicdn.com/bao/uploaded/i4/4117837186/O1CN01TMzaK322xEjmmNhGC_!!4117837186-0-lubanu-s.jpg',
          price: 29.9,
          desc: '超级无敌好吃的蔬菜，水果，海鲜小程序平台，价格美丽，品质动人！',
          goods_id:1
        },
        {
          id: 2,
          img_src: 'https://img.alicdn.com/bao/uploaded/i4/4117837186/O1CN01TMzaK322xEjmmNhGC_!!4117837186-0-lubanu-s.jpg',
          price: 29.9,
          desc: '超级无敌好吃的蔬菜，水果，海鲜小程序平台，价格美丽，品质动人！',
          goods_id:2
        },
        {
          id: 3,
          img_src: 'https://img.alicdn.com/bao/uploaded/i4/4117837186/O1CN01TMzaK322xEjmmNhGC_!!4117837186-0-lubanu-s.jpg',
          price: 29.9,
          desc: '超级无敌好吃的蔬菜，水果，海鲜小程序平台，价格美丽，品质动人！',
          goods_id:3
        },
        {
          id: 4,
          img_src: 'https://img.alicdn.com/bao/uploaded/i4/4117837186/O1CN01TMzaK322xEjmmNhGC_!!4117837186-0-lubanu-s.jpg',
          price: 29.9,
          desc: '超级无敌好吃的蔬菜，水果，海鲜小程序平台，价格美丽，品质动人！',
          goods_id:4
        },
        {
          id: 5,
          img_src: 'https://img.alicdn.com/bao/uploaded/i4/4117837186/O1CN01TMzaK322xEjmmNhGC_!!4117837186-0-lubanu-s.jpg',
          price: 29.9,
          desc: '超级无敌好吃的蔬菜，水果，海鲜小程序平台，价格美丽，品质动人！',
          goods_id:5
        },
        {
          id: 6,
          img_src: 'https://img.alicdn.com/bao/uploaded/i4/4117837186/O1CN01TMzaK322xEjmmNhGC_!!4117837186-0-lubanu-s.jpg',
          price: 29.9,
          desc: '超级无敌好吃的蔬菜，水果，海鲜小程序平台，价格美丽，品质动人！',
          goods_id:6
        },
        {
          id: 7,
          img_src: 'https://img.alicdn.com/bao/uploaded/i4/4117837186/O1CN01TMzaK322xEjmmNhGC_!!4117837186-0-lubanu-s.jpg',
          price: 29.9,
          desc: '超级无敌好吃的蔬菜，水果，海鲜小程序平台，价格美丽，品质动人！',
          goods_id:7
        },
        {
          id: 8,
          img_src: 'https://img.alicdn.com/bao/uploaded/i4/4117837186/O1CN01TMzaK322xEjmmNhGC_!!4117837186-0-lubanu-s.jpg',
          price: 29.9,
          desc: '超级无敌好吃的蔬菜，水果，海鲜小程序平台，价格美丽，品质动人！',
          goods_id:8
        },
        {
          id: 9,
          img_src: 'https://img.alicdn.com/bao/uploaded/i4/4117837186/O1CN01TMzaK322xEjmmNhGC_!!4117837186-0-lubanu-s.jpg',
          price: 29.9,
          desc: '超级无敌好吃的蔬菜，水果，海鲜小程序平台，价格美丽，品质动人！',
          goods_id:9
        },
        {
          id: 10,
          img_src: 'https://img.alicdn.com/bao/uploaded/i4/4117837186/O1CN01TMzaK322xEjmmNhGC_!!4117837186-0-lubanu-s.jpg',
          price: 29.9,
          desc: '超级无敌好吃的蔬菜，水果，海鲜小程序平台，价格美丽，品质动人！',
          goods_id:10
        },
        {
          id: 11,
          img_src: 'https://img.alicdn.com/bao/uploaded/i4/4117837186/O1CN01TMzaK322xEjmmNhGC_!!4117837186-0-lubanu-s.jpg',
          price: 29.9,
          desc: '超级无敌好吃的蔬菜，水果，海鲜小程序平台，价格美丽，品质动人！',
          goods_id:11
        },
        {
          id: 12,
          img_src: 'https://img.alicdn.com/bao/uploaded/i4/4117837186/O1CN01TMzaK322xEjmmNhGC_!!4117837186-0-lubanu-s.jpg',
          price: 29.9,
          desc: '超级无敌好吃的蔬菜，水果，海鲜小程序平台，价格美丽，品质动人！',
          goods_id:12
        }
      ],
     
    };
  },
  onPullDownRefresh(){
    uni.stopPullDownRefresh()
  },
  onLoad(options) {
    // 将页面参数转存到 this.queryObj 对象中
    this.queryObj.query = options.query || '';
    this.queryObj.cid = options.id || '';
  },
  methods: {
    gotoDetail(item){
      uni.navigateTo({
        url:"/subpackage/goods_detail/goods_detail?goos_id="+item.goos_id
      })
    }
  }
};
</script>

<style lang="scss">
  .page_goods_list {
    background-color: #F5F5F5;
  }
  .goods-list{
    .goods-item{
      display: flex;
      .goods-item-left{
        margin-right: 5px;
        .item-pic {
          width: 100px;
          height: 100px;
          display: block;
        }
      }
      .goods-item-right{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .goods-name{
          font-size: 13px;
        }
        .goods-info-box {
          display: flex;
          justify-content: space-between;
          .goods-price {
            font-size: 16px;
            font-weight: bold;
            color: #C00000;
          }
          .joinCart {
            margin-right: 5rpx;
            border-radius: 36rpx;
            font-size: 20rpx;
            text-align: center;
            background-color: #dc7004;
          }
          
        }
       
      }
    }
  }
</style>
