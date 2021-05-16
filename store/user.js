export default {
  // 开启命名空间
  namespaced: true,

  // state 数据
  state: () => ({
    // 3. 读取本地的收货地址数据，初始化 address 对象
    address: JSON.parse(uni.getStorageSync('address') || '{}'),
       token: uni.getStorageSync('token') || '',
        userinfo: JSON.parse(uni.getStorageSync('userinfo') || '{}'),
  }),

  // 方法
  mutations: {
    // 更新收货地址
    updateAddress(state, address) {
      state.address = address

      // 2. 通过 this.commit() 方法，调用 m_user 模块下的 saveAddressToStorage 方法将 address 对象持久化存储到本地
      this.commit('m_user/saveAddressToStorage')
    },
    // 1. 定义将 address 持久化存储到本地 mutations 方法
    saveAddressToStorage(state) {
      uni.setStorageSync('address', JSON.stringify(state.address))
    },
      updateUserInfo(state, userinfo) {
        state.userinfo = userinfo
        // 通过 this.commit() 方法，调用 m_user 模块下的 saveUserInfoToStorage 方法，将 userinfo 对象持久化存储到本地
        this.commit('m_user/saveUserInfoToStorage')
      },
       saveUserInfoToStorage(state) {
          uni.setStorageSync('userinfo', JSON.stringify(state.userinfo))
        },
          updateToken(state, token) {
            state.token = token
            // 通过 this.commit() 方法，调用 m_user 模块下的 saveTokenToStorage 方法，将 token 字符串持久化存储到本地
            this.commit('m_user/saveTokenToStorage')
          },
        
          // 将 token 字符串持久化存储到本地
          saveTokenToStorage(state) {
            uni.setStorageSync('token', state.token)
          }
  },

  // 数据包装器
  getters: {},
}