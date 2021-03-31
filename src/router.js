import Vue from "vue";
import VueRouter from "vue-router";
import Login from './views/login/index.vue'
import Layout from '@/components/Layout.vue'
import Home from '@/views/home'
import Member from './views/member'
import Supplier from './views/supplier'
import Goods from './views/goods'
import Staff from './views/staff'
//下面情况下会默认导入index。vue如果不是index.vue就不会导入
// import Login from '../views/login'

Vue.use(VueRouter);

const routes = [
    { path: '/login', name: 'login', component: Login },
    {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/home',
        children: [{
            path: '/home',
            component: Home,
            meta: { title: '首页' }
        }, ]
    },
    {
        path: '/member',
        component: Layout,
        children: [{
            path: '/', //  /member/
            component: Member,
            meta: { title: '会员管理' }
        }]
    },
    {
        path: '/supplier',
        component: Layout,
        children: [{
            path: '/', //  /member/
            component: Supplier,
            meta: { title: '供应商管理' }
        }]
    },
    {
        path: '/goods',
        component: Layout,
        children: [{
            path: '/', //  /member/
            component: Goods,
            meta: { title: '商品管理' }
        }]
    },
    {
        path: '/staff',
        component: Layout,
        children: [{
            path: '/', //  /member/
            component: Staff,
            meta: { title: '人员管理' }
        }]
    }
];

const router = new VueRouter({
    // mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;