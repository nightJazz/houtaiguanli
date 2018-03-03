//路由配置
import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../component/login/Login.vue'
import Admin from '../component/admin/Admin.vue'

import ShangpinDatail from '../component/admin/shangpin/datail/Datail.vue'
import shangpinList from '../component/admin/shangpin/list/List.vue'
import shangpinContent from '../component/admin/shangpin/content/Content.vue'
Vue.use(VueRouter)

//商品路由配置
const Shangpin=[
    {name:'shangpinDatail',path:'shangpin/datail/:id',component:ShangpinDatail},
    {name:'shangpinList',path:'shangpin/list',component:shangpinList},
    {name:'shangpinContent',path:'shangpin/content',component:shangpinContent}
]

export default new VueRouter({
    routes: [
        { name:'login',path:'/login',component:Login},
        { name:'admin',path:'/admin',component:Admin,children:[...Shangpin]}
    ]
})

