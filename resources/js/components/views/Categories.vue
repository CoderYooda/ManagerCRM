<template>
  <div>
    123
  </div>
</template>

<script>
    export default {
        data: ()=> {
            return {
                pageName: "1231231"
            }
        },
        mounted() {
            this.$eventBus.$emit('set-title', 'Страница категорий');
        },
        methods: {
        }
    }
</script>
