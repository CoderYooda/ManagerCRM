<template>
    <div>
        123123
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
