<template>
	<view class="login-container">
     <!--提示登录的图标-->
    <uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
         <!--登录按钮-->
      <button type="primary" class="btn-login"  @click="login" >一键登录</button>

           <!--提示登录-->
     <view class="tips-text">登录后尽享更多权益</view>
    
	</view>
</template>

<script>
  import { mapMutations } from 'vuex'
	export default {
		name:"my_login",
		data() {
			return {
				
			};
		},
    methods: {
        ...mapMutations('m_user', ['updateUserInfo', 'updateToken']),
       login() {
           wx.getUserProfile({
             desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
             success: (file) => {
               console.log(file.userInfo)
               this.updateUserInfo(file.userInfo)
                 this.updateToken('abc')
               wx.login({
                 success: (res) => {
          
                   wx.request({
                     url: 'code获取openid的接口',
                     data: {
                       code: res.code
                     },
                     success: (open) => {
                       wx.request({
                         url: '授权登陆接口',
                         data: {
                           openid: open.data.openid,
                           NickName: file.userInfo.nickName,
                           HeadUrl: file.userInfo.avatarUrl
                         },
                         success(data) {
                       
                         }
                       })
                     }
                   })
                 }
               })
             }
           })
         },
    
    }
    
	}
</script>

<style lang="scss">
.login-container {
  // 登录盒子的样式
  height: 750rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  position: relative;
  overflow: hidden;

  // 绘制登录盒子底部的半椭圆造型
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    background-color: white;
    border-radius: 100%;
    transform: translateY(50%);
  }

  // 登录按钮的样式
  .btn-login {
    width: 90%;
    border-radius: 100px;
    margin: 15px 0;
    background-color: #c00000;
  }

  // 按钮下方提示消息的样式
  .tips-text {
    font-size: 12px;
    color: gray;
  }
}
</style>
