<template>
    <div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品详情</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 按钮部分 -->
        <section class="list_btn">
            <el-button icon="el-icon-edit" size="mini">新增</el-button>
            <el-button icon="el-icon-share" size="mini">全选</el-button>
            <el-button icon="el-icon-delete" size="mini">删除</el-button>
            <div class="list_ipu_right">
                <el-input placeholder="请选择搜索商品" suffix-icon="el-icon-search" size="mini">
                </el-input>
            </div>
        </section>

        <!-- 表格部分 -->
        <template>
            <el-table ref="multipleTable" :data="tableData3" style="width: 100%">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column label="标题" width="500">
                    <template slot-scope="scope">{{scope.row.title}}</template>
                </el-table-column>
                <el-table-column prop="categoryname" label="所属类别" width="150">
                </el-table-column>
                <el-table-column prop="stock_quantity" width="100" label="库存" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="market_price" width="100" label="市场价" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="sell_price" width="100" label="销售价" show-overflow-tooltip>
                </el-table-column>
                <el-table-column label="属性" width="180" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <router-link to="#">三个图标 </router-link>
                    </template>                  
                </el-table-column>
                <el-table-column prop='' width="100" label="操作" show-overflow-tooltip>   
                        <template slot-scope="scope">
                            <router-link to="#">修改</router-link>
                        </template>
                    
                </el-table-column>
            </el-table>

        </template>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  created() {
    this.getGoodsData();
  },
  methods: {
    getGoodsData() {

      this.$http.get(this.$api.gsList+`?pageIndex=1&pageSize=10`).then(res => {
          if (res.data.status == 0) { 
            this.tableData3 = res.data.message;
          } 
        });
    }
  }
};
</script>

<style scoped lang=""less>
.list_btn {
  margin-top: 20px;
  border: 1px solid #33333f52;
  padding: 5px;
  border-radius: 5px;
}
.list_ipu_right {
  float: right;
  width: 200px;
}
</style>