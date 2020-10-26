<template>
    <div>
        Настройки
    </div>
</template>

<script>
    export default {

        // data:{
        //   router:{
        //       mode: 'history',
        //       base: '/settings',
        //       routes: [
        //           {
        //               path: '/base',
        //               name: 'base',
        //               component: () => import('./components/views/Home.vue')
        //           },
        //           {
        //               path: '/theme',
        //               name: 'theme',
        //               component: () => import('./components/views/Categories.vue')
        //           }
        //       ]
        //   }
        // },

        mounted() {
            this.$eventBus.$emit('set-title', 'Настройки');
        },
        methods: {
        }
    }
</script>
