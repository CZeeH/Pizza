
<template>
<div class="card text-dark bg-light mb-3"> 
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h4 class="card-title">联系我们</h4>
      <p class="card-text">956100390@qq.com</p>
      <router-link tag="li" class="nav-link" :to="{name:'phoneNumber'}">
          <a class="list-group-item list-group-item-action">电话号码</a>
     </router-link>
     <router-link tag="li" class="nav-link" :to="{name:'personName'}">
          <a class="list-group-item list-group-item-action">联系人</a>
     </router-link>
    <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style>
</style>
