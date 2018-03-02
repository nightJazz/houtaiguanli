<template>
    <div>
        <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu v-for="item in menu" :key="item.title" :index="item.title">
                <!-- 商品一级分类 -->
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{item.title}}</span>
                </template>    
                <!-- 商品二级分类 -->              
                    <el-menu-item v-for="submenu in item.children" :key="submenu.title" index='submeut'>
                        {{submenu.title}}
                    </el-menu-item>
                 
                      
                                          
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
  data(){
      return{
          menu:[
              {title:'商品详情',
              children:[
                    {title:'内容管理',path:'/admin/goods'},
                    {title:'类别管理',path:'/admin/list'},
                    {title:'商品管理',path:'/.admin/content'}
                ]
              },
              {
                  title:'订单详情',
                  children:[
                      {title:'内容订单',path:'/ammin/a'},
                      {title:'内容订单2',path:'/ammin/b'},
                      {title:'内容订单3',path:'/ammin/c'},
                      {title:'内容订单4',path:'/ammin/d'}
                  ]
              }
          ]
      }
  }
};
</script>

<style scoped>

</style>