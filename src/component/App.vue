<template>
    <div>
        {{val}}
        <!-- 跟组件路由占位，通过url来控制页面展示 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                val:'vue脚手架测色'
            }
        }
    }
</script>

<style scoped>

</style>