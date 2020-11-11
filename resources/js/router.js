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
            path: '/scripture',
            name: 'scripture',
            meta: {layout: 'main'},
            component: () => import('./components/views/Scripture.vue')
        },
        {
            path: '/im',
            name: 'Messenger',
            meta: {layout: 'main', header:false, footer:false},
            component: () => import('./components/views/Messenger.vue')
        },
        {
            path: '/contacts',
            name: 'contacts',
            redirect: 'contacts/all',
            meta: {layout: 'main', header:false, footer:false},
            component: () => import('./components/views/Contacts.vue'),
            children:[
                {
                    path: ':category_id',
                    name: 'contactItem',
                    meta: {layout: 'main', header:false, footer:false},
                    component: () => import('./components/views/Contacts/UserList'),
                    props: true
                },
                {
                    path: '/contacts/:category_id/:entity_id/card',
                    name: 'contact',
                    meta: {layout: 'main', header:false, footer:false},
                    component: () => import('./components/views/Contacts/Contact.vue'),
                },
            ]
        },
        {
            path: '/settings',
            name: 'settings',
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
        {
            path: '/references',
            name: 'references',
            redirect: 'references/all',
            meta: {layout: 'main', header:false, footer:false},
            component: () => import('./components/views/Reference.vue'),
            children:[
                {
                    path: ':category_id',
                    name: 'referenceItem',
                    meta: {layout: 'main', header:false, footer:false},
                    component: () => import('./components/views/Reference/ReferenceList'),
                    props: true
                },
                {
                    path: '/references/:category_id/:entity_id/edit',
                    name: 'record',
                    meta: {layout: 'main', header:false, footer:false},
                    component: () => import('./components/views/Reference/Record.vue'),
                },
            ]
        },
        {
            path: '/404',
            name: '404',
            meta: {layout: 'error', header:false, footer:false},
            component: () => import('./components/service/NotFound'),
        }, {
            path: '*',
            redirect: '/404'
        }
    ]
})
