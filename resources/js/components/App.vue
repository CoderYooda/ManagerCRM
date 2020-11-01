<template>
    <div id="app" class="app">
<!--        <div>190</div>-->
        <component :is="layout" />
    </div>

</template>

<script>
    import MainLayout from './layouts/MainLayout'
    import ErrorLayout from './layouts/ErrorLayout'
    export default {
        data: ()=> {
            return {
                isFullwidth: false,
                themeColor: 'primary'
            }
        },
        created(){

            this.loadTheme();
            this.loadThemeColor();
            this.$eventBus.$on('themeChanged', ()=>{
                this.loadTheme();
                this.loadThemeColor();
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
            loadThemeColor(){
                let theme = this.getFromLocalStorage('theme');
                if(theme){
                    this.themeColor = theme;
                } else {
                    this.saveToLocalStorage('theme', 'primary');
                }

                let theme_link = document.getElementById('theme_link');
                theme_link.setAttribute('href', '/css/theme/' + this.themeColor + '.css');
            }
        },
        computed: {
            layout() {
                return (this.$route.meta.layout || 'main') + '-layout'
            },
        },
        components: {
            MainLayout, ErrorLayout
        }
    }
</script>
