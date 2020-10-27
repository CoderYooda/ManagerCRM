<template>
    <div class="app" >
        <Aside>
        </Aside>
        <MainContent>
        </MainContent>
    </div>
</template>

<script>
    import MainContent from './Content'
    import Aside from './Aside'
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
        mounted() {
        },
        methods: {
            loadTheme(){
                let isFullwidth = this.getFromLocalStorage('isFullwidth');
                this.isFullwidth = (isFullwidth === 'true');
                let body = document.getElementsByTagName('body')[0];
                body.classList.remove('container');
                if(!this.isFullwidth)
                    body.classList.add('container');

            },
        },
        components: {
            MainContent, Aside
        }
    }
</script>
