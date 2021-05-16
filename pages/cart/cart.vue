<template>
  <view class="cart-container">
    <my-address></my-address>
  	<view class="cart-title">
  	    <!-- 左侧的图标 -->
  	  <uni-icons type="shop" size="18"></uni-icons>
  	   <!-- 描述文本 -->
  	  <text class="cart-title-text">购物车</text>
  	</view>
   <block v-for="(goods, i) in cart" :key="i">
      <my-goods :goods="goods"></my-goods>
    </block>
       <my-settle></my-settle>
    </view>
</template>

<script>
  import badgeMix from '@/mixins/tabbar-badge.js'
 export default {
   mixins:[badgeMix],
   data(){
     return{
       
     };
   }
 }
</script>

<style lang="scss">
  .cart-title {
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 14px;
    padding-left: 5px;
    border-bottom: 1px solid #efefef;
    .cart-title-text {
      margin-left: 10px;
    }
  }
  .goods-item-left {
    margin-right: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    .goods-pic {
      width: 100px;
      height: 100px;
      display: block;
    }
  }
  .cart-container {
    padding-bottom: 50px;
  }
</style>
