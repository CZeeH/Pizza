<template>
  <div id="mymenu" class="row">
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>

        <tbody v-for="item in getMenuItems" :key="item.id">
          <tr>
            <td>
              <strong>{{ item.name }}</strong>
            </td>
          </tr>
          <tr v-for="option in item.options" :key="option.size">
            <td>{{ option.size }}</td>
            <td>{{ option.price }}</td>
            <td>
              <button
                class="btn btn-sm btn-outline-success"
                @click="addToBasket(item.name, option.size, option.price)"
              >
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4">
      <div v-if="baskets.length > 0">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody v-for="buy in baskets" :key="buy.name">
            <tr>
              <td>
                <button class="btn btn-sm btn-success" @click="decreaseQuantity(buy)">
                  -</button
                ><span>&nbsp&nbsp&nbsp{{ buy.quantity }}&nbsp&nbsp&nbsp</span
                ><button @click="increaseQuantity(buy)" class="btn btn-sm btn-success">
                  +
                </button>
              </td>
              <td>{{ buy.name }}（{{ buy.size }}寸）</td>
              <td>{{ buy.price * buy.quantity }}</td>
            </tr>
          </tbody>
        </table>
        <p>总价：{{ totalPrice }} RMB</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else>{{ basketsText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'mymenu',
  data() {
    return {
      baskets: [],
      basketsText: "请添加你需要的商品"
      // getMenuItems: []
    };
  },
  computed: {
    getMenuItems(){
      // 在vuex中获取数据
      return this.$store.getters.getMenuItems;
    },

    totalPrice() {
      let totalCost = 0;
      this.baskets.forEach((value, index) => {
        totalCost += value.price * value.quantity;
      });
      return totalCost;
    },
  },
 created(){
    this.$axios.get('/get-pizza')
    .then(res => {
      console.log('in  HTTP proxy res -----------------------------------');
      // this.getMenuItems=JSON.parse(res.data.datas);
      this.$store.commit("setMenuItems",JSON.parse(res.data.datas))//利用vuex实现数据传动
    })
    .catch(err => {
       console.log('in  HTTP proxy err----------------------------------')
       console.error(err); 
    })
    //把请求下来的数据存储到vuex中
 },
  methods: {
    addToBasket(name, size, price) {
      let basket = {
        name: name,
        size: size,
        price: price,
        quantity: 1,
      };
      if (this.baskets.length > 0) {
        //过滤匹配
        let result=this.baskets.filter(b=>{
          return(b.name===name&&b.size===size);
        })
        if(result!=null && result.length>0){
          result[0].quantity++;
        }else{
         this.baskets.push(basket);
        }
      } else {
        this.baskets.push(basket);
      }
    },
    decreaseQuantity(buy) {
      if (!(buy.quantity > 1 && buy.quantity--)) {
        this.removeFromBaskets(buy);
      }
    },
    increaseQuantity(buy) {
      buy.quantity++;
    },
    removeFromBaskets(buy) {
      this.baskets.splice(this.baskets.indexOf(buy), 1); //移除
    },
  },
};
</script>

<style>
</style>
