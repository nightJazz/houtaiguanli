<template>
    <div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品详情</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb>

        <section class="list_btn">

            <el-button icon="el-icon-edit" size="mini">新增</el-button>
            <el-button icon="el-icon-share" size="mini">全选</el-button>
            <el-button icon="el-icon-delete" size="mini">删除</el-button>
            <div class="list_ipu_right">
                <el-input placeholder="请选择搜索商品" suffix-icon="el-icon-search" size="mini">
            </el-input>
            </div>
        </section>

    </div>
</template>

<script>
export default {
  data() {
    return {};
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
.list_ipu_right{
    float: right;
    width:200px;
}
</style>