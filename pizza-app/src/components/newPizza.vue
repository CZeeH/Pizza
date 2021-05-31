<template>
  <form>
    <h3 class="text-muted my-5">添加新的食物</h3>
    <div class="form-group row">
      <label for="" class="col-sm-1">品种</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.name" />
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-1">描述</label>
      <div class="col-sm-11">
        <textarea
          rows="5"
          class="form-control"
          v-model="newPizza.description"
        ></textarea>
      </div>
    </div>
    <div v-for="(op,index) in choice">
     <p><strong>选项{{op}}</strong></p>
      <div class="form-group row">
        <label for="" class="col-sm-1">尺寸</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" v-model="newPizza.options[index].size" />
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-1">价格</label>
        <div class="col-sm-11">
          <input type="text" class="form-control" v-model="newPizza.options[index].price" />
        </div>
      </div>
    </div>
      <div class="form-group row">
        <p class="btn btn-success col-sm-4" @click="addOptions">添加新选项+</p>
        <p class="col-sm-4"></p>
        <p class="btn btn-danger col-sm-4" @click="deOptions">减少选项-</p>
      </div>
    <div class="form-group row">
      <p class="btn btn-success btn-block" @click="addMenuItem">添加更新</p>
      <!-- <button class="btn btn-success btn-block" @click="addMenuItem">添加更新</button> -->
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      newPizza: {
        name: "",
        options:[{
          size:'',
          price:''
        }]
      },
      choice:1,
      list:['一','二','三','四','五','六'],
      data:[]
    };
  },
  methods:{
      addOptions(){
          this.newPizza.options.push({
          size:'',
          price:''
        })
          this.choice+=1;
      },
      deOptions(){
        if(this.choice>1){
          this.choice-=1;
          this.newPizza.options.slice(this.newPizza.options.length,1)
        }
      },
      addMenuItem(){
          let data={
            name:this.newPizza.name,
            description:this.newPizza.description,
            options:this.newPizza.options
          }
          if(data.name=='' || data.description===''){
            alert('请输入内容')
            return 
          }
          console.log(data)
          fetch("http://localhost:9816/pizza-post",{
            method:"POST",
            headers:{
              "Content-type":'application/json'
            },
            body:JSON.stringify(data)
          })
          .then(res=>{
            console.log(res)
            // this.$router.push({name:"mymenu"})
            this.$store.commit("pushToMenuItems",data)

          })
      }
  }
};
</script>
