<template>
    <div class="header">
        欢迎，<span class="header_font">{{uname}}</span>
        <el-dropdown>
            <i class="el-icon-arrow-down el-icon-caret-bottom"></i>
            <span class="el-dropdown-link" @command="handleCommand">
                功能
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command='a'>修改密码</el-dropdown-item>
                <el-dropdown-item command='c' divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    data(){
        return{
            uname:localStorage.getItem('name')
        }
    },
    methods: {
        handleCommand(command){
            
        }
    }
};
</script>

<style scoped lang='less'>
    .header{
        float: right;
        font-size:18px;
        line-height: 60px;
        &_font{
            color: red;
            padding-right: 5px;
            border-right: 1px solid #666;
        }
        .el-dropdown-link{
            font-size: 16px;
        }
        .el-icon-caret-bottom{
            font-size: 20px;
        }
    }
</style>