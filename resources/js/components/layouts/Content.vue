<template>
    <div id="content" v-bind:class="{ dark: isDark }" class="app-content box-shadow-0" role="main">
        <div class="content-header white  box-shadow-0" id="content-header">
            <div class="navbar navbar-expand-lg">
                <div class="navbar-text nav-title flex" id="pageTitle"  >{{ pageName }}</div>
            </div>
        </div>
        <main class="content-main" id="content-main">
            <div class="app-page">
                <router-view />
            </div>
        </main>
        <div class="content-footer white " id="content-footer">
            <div class="d-flex p-3">
                <span class="text-sm text-muted flex">&copy; Copyright. Flatfull</span>
                <div class="text-sm text-muted">Version 1.2.0</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: ()=> {
            return {
                pageName: "Название страницы",
                isDark: false,
            }
        },
        created(){
            this.$eventBus.$on('set-title', this.setTitle);

            this.loadTheme();

            this.$eventBus.$on('themeChanged', ()=>{
                this.loadTheme();
            });
        },
        mounted() {
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
    }
</script>
