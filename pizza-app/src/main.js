import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios';  
import $ from 'jquery';
import {store} from './store/store';
Vue.prototype.$axios = axios;//配置VUE原型（在任何组件中都可以正常使用axios）
axios.defaults.withCredentials = true;//允许携带cookie
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//全局守卫
// router.beforeEach((to,from,next)=>{
  // alert('还没有登录，请先登录！')
  // next();
 /* if(to.path==='/login' || to.path==='/register'){
    next()
  }else{
    alert('还没有登录，请先登录！')
    next('/login');
  }*/
// })

//后置钩子
// router.afterEach((to,from)=>{
//   alert("after each"); 
// })
axios.defaults.baseURL='http://localhost:9816/';
Vue.use(ElementUI);//使用UI组件拉！

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
