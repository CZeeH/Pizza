<template>
  <div id="admin" class="row">
     <div class="col-sm-12 col-md-8">
       <!-- new  pizza -->
        <app-new-pizze></app-new-pizze>
       </div>
       <div class="col-sm-12 col-md-4">
       <!-- 品种展示 -->
        <h3 class="text-muted my-5">菜单列表</h3>
        <table class="table">
          <thead class="table table-default">
            <tr>
              <th>品种</th>
              <th>删除</th> 
            </tr>
          </thead>
          <tbody v-for="pizza in getMenuItems">
            <tr>
            <td>{{pizza.name}}</td>
            <td>
            <!-- <tr v-for="opt in pizza.options">
            <td>{{pizza.name}}({{opt.size}})</td>
            <td> -->
              <button class="btn btn-outline-danger btn-sm" @click="removePizza(pizza.id)">X</button>
            </td>
            </tr>
          </tbody>
        </table>
       </div>
  </div>
</template>

<script>
import newPizze from './newPizza';
export default {
  data () {
    return {
      name:"Henry",
      list:2
      // pizzas:[]
    }
  },
  components:{
    'app-new-pizze':newPizze
  },
  methods:{
    removePizza(id){
       fetch(`http://localhost:9816/pizza-delete?id=${id}`)
      .then(res=>{
            this.$store.commit('removeMenuItems',id)//使用vuex就可以进行页面不刷新同步删除
          })
    }
  },
  computed: {
    getMenuItems:{
      // 在vuex中获取数据
      get(){
        return this.$store.getters.getMenuItems
      },
      set(){

      }
    }
    }
  ,
  created(){
    // fetch("http://localhost:9816/get-pizza")
    //       .then(res=>{
    //         console.log(res)
            
    //       })
           this.$axios.get('/get-pizza')
    .then(res => {
      console.log('in  HTTP proxy res -----------------------------------');
      // this.pizzas=JSON.parse(res.data.datas);
      this.$store.commit("setMenuItems",JSON.parse(res.data.datas))
    })
    .catch(err => {
       console.log('in  HTTP proxy err----------------------------------')
       console.error(err); 
    })
  }
  // beforeRouteEnter:(to,from,next)=>{
  //   // alert("Hello"+this.name);
  //   next(vm=>{
  //     alert('Hello! dear '+vm.name)
  //   })//这样才可以拿到渲染的数据
  // },
  // beforeRouteLeave:(to,from,next)=>{
  //   if(confirm('确定离开嘛？')===true){
  //     next()
  //   }else{
  //     next(false);
  //   }
  // },
}
</script>

<style>
</style>
