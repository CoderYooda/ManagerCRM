<template>
    <div class="app-page">
        dddd
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$eventBus.$emit('set-title', 'Главная страница');
        },
        methods: {
        }
    }
</script>
