<template>
    <div class="admin">
        <el-container>
            <!-- 公共头部 -->
            <el-header>
                <app-header></app-header>
            </el-header>
            <el-container class="admin_content">
                <!-- 公共左侧 -->
                <el-aside width="200px">                   
                    <app-aside></app-aside>
                </el-aside>
                 <!-- 后台管理子页面 -->
                <el-main>
                    <router-view></router-view>
                   
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Header from "./subcom/Header.vue";
import Aside from "./subcom/Aside.vue";

export default {
  components: {
    appHeader: Header,
    appAside: Aside,
   
  }
};
</script>

<style scoped lang="less">
.admin,.el-container{
    height: 100%;
    &_content{
        height: 100%;
        background-color: aqua;
        .el-aside{
            background-color: #545c64;
        }
    }
}


</style>