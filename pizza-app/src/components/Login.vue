<template>
  <div id="login" class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../assets/28.png" alt="" />
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" class="form-control" v-model="email" />
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password" />
            </div>
            <button class="btn btn-block btn-success" type="submit">
              登录
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      password: "",
      email: "",
    };
  },
  //组件内的守卫 
  // beforeRouterEnter:(to,from,next)=>{
  //   next(vm=>{
  //     vm.$store.dispatch("changeLogin")
  //     vm.$store.dispatch("userLogin",null);

  //   })
  // },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      this.$axios
        .post("/pizza-login", formData)
        .then((res) => {
          console.log("in  HTTP proxy res -----------------------------------");
          if (res.data.code === 1) {
            alert(res.data.message);
          } else {
            alert("登录成功");
            // this.$store.commit("changeLogin");
            //this.$store.commit("userLogin",this.email);
            this.$store.dispatch("changeLogin" )//使用actions
            this.$store.dispatch("userLogin",this.email);
            this.$router.push({name:'home'})
          }
        })
        .catch((err) => {
          console.log("in  HTTP proxy err----------------------------------");
          console.error(err);
        });
    },
  },
};
</script>

<style>
.card-body img {
  width: 100%;
  height: auto;
}
</style>
