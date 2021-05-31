<template>
  <div id="register" class="row mt-3">
        <div class="col-md-12 col-lg-12">
          <div class="card">
            <div class="card-body">
              <img class="mx-auto d-block" src="../assets/28.png" alt="">
              <form @submit.prevent="onSubmit">
                <div class="form-group">
                  <label for="email">邮箱</label>
                  <input type="email" class="form-control" v-model="email">
                </div>
                 <div class="form-group">
                  <label for="password">密码</label>
                  <input type="password" class="form-control" v-model="password">
                </div>
                 <div class="form-group">
                  <label for="confirmPassword">确认密码</label>
                  <input type="password" class="form-control" v-model="confirmPassword">
                </div>
                <button class="btn btn-block btn-success" type="submit">注册</button>
              </form>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'register',
  data () {
    return {
      password:"",
      confirmPassword:"",
      email:""
    }
  },
  methods:{
    onSubmit(){
      if(this.password==='' || this.confirmPassword==='' ||this.email==='' ){
        alert('请输入内容')
        return ;
      }
      if(this.password===this.confirmPassword){
        const formData={
          email:this.email,
          password:this.password
        }
      this.$axios.post('/post-puser',formData)
    .then(res => {
      console.log('in  HTTP proxy res -----------------------------------');
      if(res.data.code===1){
        alert(res.data.message);
      }
      console.log(res);
    })
    .catch(err => {
       console.log('in  HTTP proxy err----------------------------------')
       console.error(err); 
    })
    }else{
      alert('请检查你的密码！')
    }
    }
  }
}
</script>

<style>
.card-body img{
  width: 100%;
  height: auto;
}
</style>
