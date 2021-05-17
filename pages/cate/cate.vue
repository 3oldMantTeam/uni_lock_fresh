<template>
  <view>
    <view class="my-search-box"><my-search @click="gotoSearch"></my-search></view>
    <view class="cates">
      <view class="cates_container">
        <!-- 左测菜单 -->
        <scroll-view scroll-y class="left_menu" :style="{height: wh + 'px'}">
          <view :class="['menu_item',i==active?'active':'']" v-for="(item, i) in leftMenuList"  :key="i" @click="handleItemTap(i)">{{ item.cat_name }}</view>
        </scroll-view>
        <!-- 右侧菜单 -->
        <scroll-view scroll-y class="right_content" :style="{height: wh + 'px'}">
          <view class="goods_group" v-for="(item, i) in rightContent" :key="i">
            <view class="goods_title">
              <text class="delimiter">/</text>
              <text class="title">{{ item.cat_name }}</text>
              <text class="delimiter">/</text>
            </view>
            <view class="goods_list">
              <view class="nav" v-for="(item2, i2) in item.children" :key="i2" @click="gotoList">
                <image mode="widthFix" :src="item2.cat_icon"></image>
                <view class="goods_name">{{ item2.cat_name }}</view>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
import badgeMix from '@/mixins/tabbar-badge.js';
export default {
  mixins: [badgeMix],
    onLoad() {
        // 获取当前系统的信息
        const sysInfo = uni.getSystemInfoSync()
        // 为 wh 窗口可用高度动态赋值
        this.wh = sysInfo.windowHeight
      },
  data() {
    return {
      active: 0,
      // 窗口的可用高度 = 屏幕高度 - navigationBar高度 - tabBar 高度
      wh: 0,
      //左侧菜单数据
      leftMenuList: [
        {
          cat_id: 1,
          cat_name: '产品尝鲜',
          cat_pid: 0,
          cat_deleted: false,
          cat_icon: '/full/none.jpg'
        },
        {
          cat_id: 2,
          cat_name: '新人专享',
          cat_pid: 0,
          cat_deleted: false,
          cat_icon: '/full/none.jpg'
        },
        {
          cat_id: 3,
          cat_name: '新鲜水果',
          cat_pid: 0,
          cat_deleted: false,
          cat_icon: '/full/none.jpg'
        },
        {
          cat_id: 4,
          cat_name: '新鲜蔬菜',
          cat_pid: 0,
          cat_deleted: false,
          cat_icon: '/full/none.jpg'
        },
        {
          cat_id: 5,
          cat_name: '海鲜水产',
          cat_pid: 0,
          cat_deleted: false,
          cat_icon: '/full/none.jpg'
        },
        {
          cat_id: 6,
          cat_name: '肉禽蛋类',
          cat_pid: 0,
          cat_deleted: false,
          cat_icon: '休闲食品'
        },
        {
          cat_id: 7,
          cat_name: '速食冻品',
          cat_pid: 0,
          cat_deleted: false,
          cat_icon: '/full/none.jpg'
        },
        {
          cat_id: 8,
          cat_name: '日用百货',
          cat_pid: 0,
          cat_deleted: false,
          cat_icon: '/full/none.jpg'
        },
        {
          cat_id: 9,
          cat_name: '粮油调味',
          cat_deleted: false,
          cat_icon: '/full/none.jpg'
        },
        {
          cat_id: 10,
          cat_name: '酒饮冲调',
          cat_pid: 0,
          cat_deleted: false,
          cat_icon: '/full/none.jpg'
        },
        {
          cat_id: 11,
          cat_name: '日用百货',
          cat_pid: 0,
          cat_deleted: false,
          cat_icon: '/full/none.jpg'
        },
        {
          cat_id: 12,
          cat_name: '日用百货2',
          cat_pid: 0,
          cat_deleted: false,
          cat_icon: '/full/none.jpg'
        },
        {
          cat_id: 13,
          cat_name: '日用百货2',
          cat_pid: 0,
          cat_deleted: false,
          cat_icon: '/full/none.jpg'
        },
        {
          cat_id: 14,
          cat_name: '日用百货3',
          cat_pid: 0,
          cat_deleted: false,
          cat_icon: '/full/none.jpg'
        },
        {
          cat_id: 15,
          cat_name: '日用百货4',
          cat_pid: 0,
          cat_deleted: false,
          cat_icon: '/full/none.jpg'
        },
        {
          cat_id: 16,
          cat_name: '日用百货5',
          cat_pid: 0,
          cat_deleted: false,
          cat_icon: '/full/none.jpg'
        }
      ],
      //右侧内容数据
      rightContent: [
        {
          cat_id: 2,
          cat_name: '水果',
          cat_pid: 1,
          cat_level: 1,
          cat_deleted: false,
          cat_icon: '/full/none.jpg',
          children: [
            {
              cat_id: 5,
              cat_name: '苹果',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1213961516,2053557817&fm=26&gp=0.jpg'
            },
            {
              cat_id: 6,
              cat_name: '香蕉',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=385529678,1496085934&fm=26&gp=0.jpg'
            },
            {
              cat_id: 7,
              cat_name: '梨子',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=558457441,3724175101&fm=26&gp=0.jpg'
            },
            {
              cat_id: 8,
              cat_name: '芒果',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1358829725,2404280869&fm=224&gp=0.jpg'
            },
            {
              cat_id: 9,
              cat_name: '火龙果',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1350695696,1551312395&fm=26&gp=0.jpg'
            },
            {
              cat_id: 10,
              cat_name: '樱桃',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3831095947,1429018385&fm=26&gp=0.jpg'
            },
            {
              cat_id: 11,
              cat_name: '西瓜',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=745015724,515026026&fm=26&gp=0.jpg'
            },
            {
              cat_id: 12,
              cat_name: '哈密瓜',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1255311944,2171565942&fm=26&gp=0.jpg'
            },
            {
              cat_id: 13,
              cat_name: '桃子',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3174903236,1536901832&fm=26&gp=0.jpg'
            },
            {
              cat_id: 6,
              cat_name: '草莓',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=517089590,1657553510&fm=26&gp=0.jpg'
            },
            {
              cat_id: 14,
              cat_name: '葡萄',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2567967897,2922467679&fm=26&gp=0.jpg'
            },
            {
              cat_id: 15,
              cat_name: '椰子',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3270645581,3239462755&fm=26&gp=0.jpg'
            },
            {
              cat_id: 16,
              cat_name: '荔枝',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1618570702,2421288098&fm=26&gp=0.jpg'
            },
            {
              cat_id: 17,
              cat_name: '橙子',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3095543687,1858804174&fm=26&gp=0.jpg'
            },
            {
              cat_id: 18,
              cat_name: '猕猴桃',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=311604555,3249544550&fm=26&gp=0.jpg'
            },
            {
              cat_id: 19,
              cat_name: '猕猴桃',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=311604555,3249544550&fm=26&gp=0.jpg'
            },
            {
              cat_id: 20,
              cat_name: '猕猴桃',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=311604555,3249544550&fm=26&gp=0.jpg'
            },
            {
              cat_id: 21,
              cat_name: '猕猴桃',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=311604555,3249544550&fm=26&gp=0.jpg'
            },
            {
              cat_id: 22,
              cat_name: '猕猴桃',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=311604555,3249544550&fm=26&gp=0.jpg'
            },
            {
              cat_id: 23,
              cat_name: '猕猴桃',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=311604555,3249544550&fm=26&gp=0.jpg'
            },
            {
              cat_id: 24,
              cat_name: '猕猴桃',
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=311604555,3249544550&fm=26&gp=0.jpg'
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleItemTap(i) {
      this.active = i;
    },
    gotoList() {
      uni.navigateTo({
        url: '/subpackage/goods_list/goods_list'
      });
    },
    gotoSearch() {
      uni.navigateTo({
        url: '/subpackage/search/search'
      });
    }
  }
};
</script>

<style lang="scss">
page {
  height: 100%;
}

.cates {
  height: 100%;

  .cates_container {
    height: 'calc( 100vh - 90rpx )';
    display: flex;

    //左侧列表
    .left_menu {
      flex: 2;
      background-color: rgb(243, 242, 242);
   
      .menu_item {
        height: 100rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        font-style: 40rpx;
      }

     
           // 激活项的样式
           .active {
             background-color: #ffffff;
             position: relative;
     
             // 渲染激活项左侧的红色指示边线
             &::before {
               content: ' ';
               display: block;
               width: 3px;
               height: 30px;
               background-color: #c00000;
               position: absolute;
               left: 0;
               top: 50%;
               transform: translateY(-50%);
             }
           }
    }

    //右侧列表
    .right_content {
      flex: 5;
      height: 650px;
      .goods_group {
        .goods_title {
          height: 80rpx;
          display: flex;
          justify-content: center;
          align-items: center;

          .delimiter {
            color: #ccc;
            padding: 0 10rpx;
          }
        }

        //商品清单
        .goods_list {
          display: flex;
          flex-wrap: wrap;

          .nav {
            width: 33.33%;
            text-align: center;

            image {
              width: 80px;
            }
          }
        }
      }
    }
  }
}
.my-search-box {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>
