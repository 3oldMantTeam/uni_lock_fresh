<template>
  <view>
    <!-- //搜索框 -->
    <view class="search-box"><uni-search-bar @confirm="search" @input="input" :radius="100" cancelButton="none"></uni-search-bar></view>
    <!-- //搜索建议列表 -->
    <view class="sugget-list" v-if="searchResults.length !== 0">
      <view class="sugget-item" v-for="(item, i) in searchResults" :key="i" @click="gotoDetail(item)">
        <view class="goods-name">{{ item.goods_name }}</view>
        <uni-icons type="arrowright" size="16"></uni-icons>
      </view>
    </view>
    <!-- 搜索历史区域 -->
    <!-- 搜索历史 -->
    <view class="history-box" v-else>
      <!-- 标题区域 -->
      <view class="history-title">
        <text>搜索历史</text>
        <uni-icons type="trash" size="17" @click="cleanHistory"></uni-icons>
      </view>
      <!-- 列表区域 -->
      <view class="history-list">
        <text class="tag" v-for="(item, i) in histories" :key="i" @click="gotoGoodsList(item)">{{ item }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      //防抖的timer
      timer: null,
      //关键词
      kw: '',
      //拿到的搜索结果列表
      searchResults: [],
      historyList: []
    };
  },
  methods: {
    //搜索
    input(value) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.kw = value;
        this.getSearchList();
      }, 500);
    },
    //根据搜索关键词搜索商品
    async getSearchList() {
      //判断搜索关键词是否为空
      if (this.kw.length === 0) {
        this.searchResults = [];
        return;
      }
      //发起请求，获取搜索建议列表
      const { data: res } = await uni.$http.get('/api/public/v1/goods/qsearch', { query: this.kw });
      if (res.meta.status !== 200) return uni.$showMsg();
      this.searchResults = res.message;
      this.saveSearchHistory();
    },
    gotoDetail(item) {
      uni.navigateTo({
        url: '/subpackage/goods_detail/goods_detail?goods_id=' + item.goods_id
      });
    },
    //保存搜索历史的关键词
    saveSearchHistory() {
      // this.historyList.push(this.kw)
      //解决关键词重复的问题
      const set = new Set(this.historyList);
      set.delete(this.kw);
      set.add(this.kw);
      this.historyList = Array.from(set);
      // 调用 uni.setStorageSync(key, value) 将搜索历史记录持久化存储到本地
        uni.setStorageSync('kw', JSON.stringify(this.historyList))
    },
  // 清空搜索历史记录
  cleanHistory() {
    // 清空 data 中保存的搜索历史
    this.historyList = []
    // 清空本地存储中记录的搜索历史
    uni.setStorageSync('kw', '[]')
  },
  //点击历史跳转到对应的物品列表
  gotoGoodsList(item){
    uni.navigateTo({
      url:'/subpackage/goods_list/goods_list?qury='+item
    })
  }
  },
  onLoad() {
    this.historyList = JSON.parse(uni.getStorageSync('kw') || '[]')
  },
  computed: {
    histories() {
      return [...this.historyList].reverse();
    }
  }
};
</script>

<style lang="scss">
.sugget-list {
  padding: 0 5px;
  .sugget-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    padding: 13px 0;
    border-bottom: 1px solid #eeeeee;
    .goods-name {
      // 文字不允许换行
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 3px;
    }
  }
}
.history-box {
  padding: 0 10rpx;
  .history-title {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #efefef;
    height: 80rpx;
    align-items: center;
    font-size: 13px;
  }
}
.history-list {
  display: flex;
  flex-wrap: wrap;
}
.tag {
  margin-top: 5px;
  margin-right: 5px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  background-color: #eeeeee;
  text-align: center;
}
</style>
