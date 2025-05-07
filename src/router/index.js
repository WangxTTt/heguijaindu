import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash', // 使用 hash 模式
    routes: [
        {
            path: '/', // 默认路径，重定向到 /Home
            redirect: '/Home',
        },
        {
            path: '/Home',
            name: 'Home',
            component: () => import('../views/Home/Home.vue')
        },
        {
            path: '/Compliance',
            name: 'Compliance',
            component: () => import('../views/Compliance/Compliance.vue')
        },
        {
            path: '/Supervision',
            name: 'Supervision',
            component: () => import('../views/Supervision/Supervision.vue')
        },
        {
            path: '/Control',
            name: 'Control',
            component: () => import('../views/Control/Control.vue')
        },
        {
            path: '/Audit',
            name: 'Audit',
            component: () => import('../views/Audit/Audit.vue')
        },
        {
            path: '/Duty',
            name: 'Duty',
            component: () => import('../views/Duty/Duty.vue')
        },
        {
            path: '/Transition',
            name: 'Transition',
            component: () => import('../views/Transition/Transition.vue')
        },
        {
            path: '/Technology',
            name: 'Technology',
            component: () => import('../views/Technology/Technology.vue')
        },
        {
            path: '/Solution',
            name: 'Solution',
            component: () => import('../views/Solution/Solution.vue')
        },
        {
            path: '/Emergency',
            name: 'Emergency',
            component: () => import('../views/Emergency/Emergency.vue')
        },
        {
            path: '/zhil',
            name: 'zhil',
            component: () => import('../views/zhil/zhil.vue')
        },
        {
            path: '/Cooperation',
            name: 'Cooperation',
            component: () => import('../views/Cooperation/Cooperation.vue')
        },
        {
            path: '/Fazhi',
            name: 'Fazhi',
            component: () => import('../views/Fazhi/Fazhi.vue')
        },
    ]
});

export default router;
