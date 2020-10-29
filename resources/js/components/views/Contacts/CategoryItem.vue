<template>
    <a href="#">
        <span class="nav-badge">
            <b class="badge badge-sm badge-pill warn">12</b>
        </span>
        <span class="nav-text">All</span>
    </a>
</template>

<script>
    export default {
        name: "CategoryItem",
        compiled() {
            console.log(this.$attrs.category_id);
        }
    }
</script>

<style scoped>

</style>
