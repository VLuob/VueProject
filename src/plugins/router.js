import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import home from "../pages/home"
let column = () => import('../pages/column')
//import column from "../pages/column"
//import follow from "../pages/follow"
let follow = () => import('@/pages/follow')
//import user from "../pages/user"
let user = () => import('../pages/user')
//import login from "../pages/login"
//let login = () => import('@/pages/login')
import reg from "../pages/reg"
import detail from "../pages/detail"
import map from "../pages/map"
import error from "../pages/error"
let routes=[
    {path:"/home",component:home},
    {path:"/column",component:column},
    {path:"/follow",component:follow},
    {path:"/user",component:user},
    {path:"/login",component:(response)=>require(['../pages/login.vue'],response)},
    {path:"/reg",component:reg},
    {path:"/map",component:map},
    {path:"/detail/:id",component:detail,
    props:(route)=>({id:route.params.id,dataName:route.query.dataName})
},
    {path:"/",redirect:"/home"},
    {path:"*",component:error},
]
export default new VueRouter({
    mode:'hash',
    routes:routes,
    scrollBehavior(to,from,savedPosition){
        return { x: 0, y: 0 }//对于所有路由导航，简单地让页面滚动到顶部
    }
})