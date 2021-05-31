<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- 图标 -->
      <a class="py-2" href="#" aria-label="Product">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
    </a>
    <a href="/" class="navbar-brand">Pizza点餐系统</a>
    <!-- 导航 -->
    <ul class="navbar-nav">
      <li>
        <router-link :to="homeLink" class="nav-link">主页</router-link>
      </li> 
      <li>
         <router-link :to="{name:'mymenu'}" class="nav-link">菜单</router-link>
      </li>
      <li>
         <router-link :to="{name:'admin'}" class="nav-link">管理</router-link>
      </li>
      <li>
         <router-link :to="{name:'about'}" class="nav-link">关于我们</router-link>
      </li>
      <li>
         <router-link :to="{name:'card'}" class="nav-link">派对合作</router-link>
      </li>
      <li>
         <router-link :to="{name:'myhelp'}" class="nav-link">帮助手册</router-link>
      </li>
    </ul>
    <!-- 右侧导航 -->
    <ul class="navbar-nav ml-auto">
      <li>
         <router-link :to="{name:'login'}" class="nav-link" v-show="!isLogin">登录</router-link>
      </li>
       <li>
         <router-link :to="{name:'logins'}" class="nav-link" v-show="!isLogin">登录吧</router-link>
      </li>
      <li>
         <router-link :to="{name:'register'}" class="nav-link" v-show="!isLogin">注册</router-link>
      </li>
      <li class="nav-link" v-show="isLogin">
         {{currentUser}}
      </li>
       <li>
         <router-link :to="{name:'login'}" class="nav-link" v-show="isLogin" ><span @click="Exit">退出</span> </router-link>
      </li>
    </ul>
    </nav>
  </header>

</template>

<script>
export default {
  name: 'myheader',
  data () {
    return {
      homeLink:'/'
    }
  },
  computed:{
    currentUser(){
      return this.$store.getters.currentUser
    },
    isLogin(){
      return this.$store.getters.isLogin
    }
  },
  methods:{
    Exit(){
       this.$store.dispatch("changeLogin" )//使用actions
       this.$store.dispatch("userLogin",'')
      //  alert('成功登出');
    }
  }
}
</script>

<style>
</style>
