<template>
   <div>{{val}}</div>
</template>

<script>
   

    export default {
        data () {
            return {
                val:'vue脚手架测色',

            }
        },
        created(){
            this.$http.get(this.$api.logout).then(()=>console.log('登出'))
        }
       
    }
</script>

<style scoped>

</style>