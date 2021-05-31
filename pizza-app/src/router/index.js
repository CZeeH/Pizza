import Vue from 'vue'
import Router from 'vue-router'
import MyMenu from '../components/MyMenu.vue';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Logins from '../components/Logins.vue';
import Register from '../components/Register.vue'
import Admin from '../components/Admin.vue';
import About from '../components/About/About.vue'
import Card from '../components/Cards/SingleCard.vue';
import Help  from '../components/Help.vue'
//二级路由
import Contact from '../components/About/Contact/Contact.vue';
import Delivery from '../components/About/Delivery.vue';
import History from '../components/About/History.vue';
import OrderGuider from '../components/About/OrderGuider.vue';

//三级路由
import Phone from '../components/About/Contact/Phone.vue'
import PersonName from '../components/About/Contact/PersonName.vue'
Vue.use(Router);
export default new Router({
  mode:"history",
  base:__dirname,
  scrollBehavior(to,from,savePosition){
    //滑动
    //return{//控制xy可以设定跳转的时候页面的定位位置
      // x:0,
      // y:100
      //selector:'.btn'//可以选中元素
    //}
    if(savePosition){
      return savePosition//回到历史记录的位置
    }else{
      return {x:0,y:0}
    }
  },
  routes: [{
      path: '/',
      name: 'home',
      components:{
        default:Home,
        'orderGuider':OrderGuider,
        'delivery':Delivery,
        'history':History
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      redirect:'/about/contact',
      children:[
        //二级路由
        {
          path: '/about/contact',
          name: 'contactLink',
          component: Contact,
          redirect:'/about/contact/phone',
          children:[
            //三级路由
            {
              path: '/about/contact/phone',
              name: 'phoneNumber',
              component: Phone
            },{
              path: '/about/contact/personname',
              name: 'personName',
              component: PersonName
            }
          ] 
        },
        {
          path: '/about/delivery',
          name: 'deliveryLink',
          component: Delivery
        },
        {
          path: '/about/history',
          name: 'historyLink',
          component: History
        },
        {
          path: '/about/orderguide',
          name: 'orderGuiderLink',
          component: OrderGuider
        }
      ]
    },
    {
      path: '/mymenu',
      name: 'mymenu',
      component: MyMenu 
    },
    {
      path: '/myhelp',
      name: 'myhelp',
      component: Help 
    },
    {
      path: '/login',
      name: 'login',
      component: Login 
    },
    {
      path: '/logins',
      name: 'logins',
      component: Logins 
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/card',
      name: 'card',
      component: Card
    },
    { //当输入任意字符的时候，会跳转到主页
      path: '*',
      redirect:'/'
    }
  ]
})