import {mapGetters} from "vuex"
export default {
    computed:{
      ...mapGetters('m_cart',['total'])
    },
    onShow(){
      this.setBadge()
    },
	
   methods:{
     setBadge(){
       // 调用 uni.setTabBarBadge() 方法，为购物车设置右上角的徽标
       uni.setTabBarBadge({
         index:2,
         text:this.total+''
       })
     }
   }
}