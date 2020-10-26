require('./bootstrap');
import Vue from 'vue';
import App from './components/App'
import router from './router';
import store from './store';

Vue.prototype.$eventBus = new Vue();

Vue.prototype.saveToLocalStorage = (key, value)=>{
    localStorage.setItem(key, value);
};

Vue.prototype.getFromLocalStorage = (key)=>{
    let val = localStorage[key];
    return val ? val : null;
};


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');











// import Index from "./components/Index";
//
// import VueRouter from 'vue-router';
//
// window.Vue.use(VueRouter);
//
// import CompaniesIndex from './components/companies/CompaniesIndex.vue';
// import CompaniesCreate from './components/companies/CompaniesCreate.vue';
// import CompaniesEdit from './components/companies/CompaniesEdit.vue';
// import NotFound from './components/service/NotFound.vue';
//
// const routes = [
//     { path: '*', component: NotFound, name: '404'},
//     { path: '/', component: Index, name: 'Index'},
//     // {path: '/admin/companies/create', component: CompaniesCreate, name: 'createCompany'},
//     // {path: '/admin/companies/edit/:id', component: CompaniesEdit, name: 'editCompany'},
// ];
//
// const router = new VueRouter({
//     mode: 'history',
//     hashbang: false,
//     routes: routes
// });
// router.mode = 'html5';
//
// const app = new Vue({ router }).$mount('#app');

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
// });
