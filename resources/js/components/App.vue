<template>
    <div id="app" >
        <component :is="layout">
            <router-view/>
        </component>
    </div>
</template>

<script>
    import MainLayout from './layouts/MainLayout'
    export default {
        data: ()=> {
            return {
                isFullwidth: false
            }
        },
        created(){
            this.loadTheme();
            this.$eventBus.$on('themeChanged', ()=>{
                this.loadTheme();
            });
        },
        methods: {
            loadTheme(){
                let isFullwidth = this.getFromLocalStorage('isFullwidth');
                this.isFullwidth = (isFullwidth === 'true');
                let body = document.getElementsByTagName('body')[0];
                body.classList.remove('container');
                body.classList.remove('dark');
                if(!this.isFullwidth)
                    body.classList.add('container');

                let content_theme = this.getFromLocalStorage('body_class');
                if(content_theme && content_theme === 'dark')
                    body.classList.add('dark');
            },
        },
        computed: {
            layout() {
                return (this.$route.meta.layout || 'main') + '-layout'
            },
        },
        components: {
            MainLayout
        }
    }
</script>
