<template>
    <div class="d-flex flex align-items-center h-v theme">
        <router-view />
    </div>
</template>

<script>
    import Aside from '../template/Aside'
    // import Footer from '../template/Footer';
    import Header from '../template/Header';
    export default {
        data: ()=> {
            return {
                isDark: false,
            }
        },
        created(){
            this.loadTheme();
            this.$eventBus.$on('themeChanged', ()=>{
                this.loadTheme();
            });
        },
        computed: {
            header() {
                return this.$route.meta.header !== false;
            },
            footer() {
                return this.$route.meta.footer !== false;
            },
        },
        methods: {
            loadTheme(){
                let content_theme = this.getFromLocalStorage('content_class');
                if(content_theme && content_theme === 'dark'){
                    this.isDark = true;
                } else {
                    this.isDark = false;
                }
            },
            setTitle: function (title) {
                this.pageName = title;
            }
        },
        components: {
            Aside, Header
        }
    }
</script>
