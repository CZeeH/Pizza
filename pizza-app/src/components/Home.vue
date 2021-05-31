<template>
  <div  class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
          <h1>欢迎光临！</h1>
          <h2>这里有你喜番的🍕</h2>
    <button class="btn btn-success" @click="goToMunu">Let's order!</button>
      </div>
    

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    goToMunu(){
      //1.跳转到上一个页面
      // this.$router.go(-1)
      //2.跳转到指定地址
      // this.$router.replace('/mymenu')
      //3.跳转到指定的名字
      // this.$router.replace({name:'login'})
      //4.通过push跳转
      this.$router.push('/mymenu')

    }
  }
}
</script>

<style>
#home{
  background: url('../assets/pizza.jpg') no-repeat ;
  background-size: 100%;
   /* background-clip: content-box; */
  height: 85vh;
  padding: 10%;
  border-radius: 10%;
}
  h1,h2{
    margin: 6%;
  }
  .background{
    background: #eee;
    opacity: .8;
    max-width: 7.vw;
    margin: 0 auto;
    padding: 20px 0;
  }


</style>
