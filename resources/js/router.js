import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/',//process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {layout: 'main'},
            component: () => import('./components/views/Home.vue')
        },
        {
            path: '/categories',
            name: 'categories',
            meta: {layout: 'main'},
            component: () => import('./components/views/Categories.vue')
        },
        {
            path: '/settings',
            name: 'settings',
            meta: {layout: 'main'},
            component: () => import('./components/views/Settings.vue')
        },
    ]
})
