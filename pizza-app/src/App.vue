<template>
  <div id="app">
    <div class="container">
  <app-header></app-header>
    </div>
    <div class="container">
      <router-view>
      </router-view>
    </div>
    <br>
    <!-- 组件复用 配合route中的components-->
    <div class="container">
      <div class="row">
      <div class="col-sm-12 col-md-4">
        <router-view name="orderGuider"></router-view>
      </div>
      <div class="col-sm-12 col-md-4">
        <router-view name="delivery"></router-view>
      </div>
      <div class="col-sm-12 col-md-4">
        <router-view name="history"></router-view>
      </div>
      </div>
    </div>

    </div>
</template>

<script>
import MyHeaders from "./components/MyHeader";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    appHeader: MyHeaders,
  },
};
</script>

<style>
</style>
