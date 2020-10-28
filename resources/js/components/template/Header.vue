<template>
    <div class="content-header white  box-shadow-0" id="content-header">
        <div class="navbar navbar-expand-lg">
            <div class="navbar-text nav-title flex" id="pageTitle"  >{{ pageName }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data: ()=> {
            return {
                pageName: "Название страницы",
            }
        },
        created(){
            this.$eventBus.$on('set-title', this.setTitle);

        },
        mounted(){
            console.log(this);
        },
        methods: {
            setTitle: function (title) {
                this.pageName = title;
            }
        },
    }
</script>

<style scoped>

</style>
