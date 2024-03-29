import Vue from 'vue'
import App from './App'
// 导入 网络请求包
import { $http } from '@escook/request-miniprogram'
// 1. 导入 store 的实例对象
import store from '@/store/store.js'
 

// 在 uni-app 项目中，可以把 $http 挂载到 uni 顶级对象之上，方便全局调用
uni.$http = $http
// 配置请求根路径
$http.baseUrl = 'https://www.uinav.com'
// 请求开始之前做一些事情
$http.beforeRequest = function (options) {
  uni.showLoading({
    title:"数据加载中"
  })
}
//挂载数据请求失败后的消息
uni.$showMsg = function (title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none',
  })
}
// 请求完成之后做一些事情
$http.afterRequest = function () {
  uni.hideLoading()
}
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
     // 2. 将 store 挂载到 Vue 实例上
     store,
})
app.$mount()
