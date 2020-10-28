import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/',//process.env.BASE_URL,
    routes: [
        {
            path: '',
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
            path: '/contacts',
            name: 'contacts',
            meta: {layout: 'main', header:false, footer:false},
            component: () => import('./components/views/Contacts.vue')
        },
        {
            path: '/settings',
            meta: {layout: 'main'},
            component: () => import('./components/views/Settings.vue'),
            children:[
                {
                    path: '',
                    component: () => import('./components/views/Settings/Base'),
                    props: true
                },
                {
                    path: 'profile',
                    component: () => import('./components/views/Settings/Profile'),
                },
                {
                    path: 'account',
                    component: () => import('./components/views/Settings/Account'),
                },
                {
                    path: 'image',
                    component: () => import('./components/views/Settings/Image'),
                },
            ]
        },
    ]
})
