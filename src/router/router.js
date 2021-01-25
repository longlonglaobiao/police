import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: "/home",
            component: resolve => require(['@/components/index.vue'], resolve),
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: resolve => require(['@/components/home.vue'], resolve),
                },
                {
                    path: '/organization',
                    name: 'organization',
                    component: resolve => require(['@/components/organization.vue'], resolve),
                },
                {
                    path: '/placeman',
                    name: 'placeman',
                    component: resolve => require(['@/components/placeman.vue'], resolve),
                },
                {
                    path: '/process',
                    name: 'process',
                    component: resolve => require(['@/components/process.vue'], resolve),
                },
                {
                    path: '/detail',
                    name: 'detail',
                    component: resolve => require(['@/components/detail.vue'], resolve),
                },
                {
                    path: '/seconds',
                    name: 'seconds',
                    component: resolve => require(['@/components/seconds.vue'], resolve),
                },
                {
                    path: '/d',
                    name: 'd',
                    component: resolve => require(['@/components/d.vue'], resolve),
                },
                {
                    path: '/article',
                    name: 'article',
                    component: resolve => require(['@/components/article.vue'], resolve),
                }
            ]

        },

    ]
})