<template>
    <div class="app" >
        <Aside/>
        <div id="content" v-bind:class="{ dark: isDark }" class="app-content box-shadow-0" role="main">
            <Header v-if="header" />
            <div class="content-main d-flex flex" id="content-main">
                <router-view />
            </div>
            <Footer v-if="footer" />
        </div>
    </div>
</template>

<script>
    import Aside from '../template/Aside'
    import Footer from '../template/Footer';
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
            Aside, Footer, Header
        }
    }
</script>
