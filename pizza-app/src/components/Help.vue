  <template>
    <div class="help">
      <div class="row">
        <div class="col-md-8">
          <div class="list">
            <h3 class="text-muted ">概览</h3>
            <hr />
            <p class="text-left ">
              本系统用于pizza点餐+派对的合作开发
            </p>
          </div>
          <div class="list">
            <h3 class="text-muted">使用流程</h3>
            <hr />
            <el-steps :active="4">
              <el-step title="步骤1" description="进入管理添加商品"></el-step>
              <el-step
                title="步骤2"
                description="查看菜单列表是否添加成功"
              ></el-step>
              <el-step title="步骤3" description="进入菜单进行点餐"></el-step>
              <el-step title="步骤4" description="进行结算"></el-step>
            </el-steps>
          </div>
          <div class="list singles">
            <h3 class="text-muted">各页面说明</h3>
            <hr />
            <h5 class="text-muted">主页</h5>
            <div class="single_page">
                <p class="text-left ">
              导航和界面
            </p>
            </div>
              <h5 class="text-muted">菜单</h5>
            <div class="single_page">
                <p class="text-left ">
              点餐+结算
            </p>
            </div>
            <h5 class="text-muted">管理</h5>
            <div class="single_page">
                <p class="text-left ">
            菜单菜品的增删改查
            </p>
            </div>
            <h5 class="text-muted">关于我们</h5>
            <div class="single_page">
                <p class="text-left ">
              商家信息 邮箱 快递方式 物流管理
            </p>
            </div>
              <h5 class="text-muted">派对合作</h5>
            <div class="single_page">
                <p class="text-left ">
              申请派对合作
            </p>
            </div>

          </div>
        </div>
        <div class="col-md-4  ">
              <h3 class="text-muted ">评价</h3>
              <hr>
            <h5 class="text-muted">界面设计</h5>
            <div class="score">
  <el-rate
    v-model="value"
    show-text>
  </el-rate>
            </div>
            
  <h5 class="text-muted">操作难度</h5>
            <div class="score">
  <el-rate
    v-model="value3"
    show-text>
  </el-rate>
            </div>
  <h5 class="text-muted">使用流畅</h5>
            <div class="score">
  <el-rate
    v-model="value2"
    show-text>
  </el-rate>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        value: null,
        value1: null,
        value2: null,
        colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      };
    },
  };
  </script>
  <style scoped>
  .help {
    margin-top: 10px;
  }
  .help_title {
    margin: 0 auto;
  }
  .list {
    margin-bottom: 40px;
  }
  .single_page {
    border-radius: 2%;
    margin-left: 30px;
    font-size: small;
  }
  .score{
      margin: 12px;
  }
  </style>