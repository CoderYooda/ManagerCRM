<template>
    <div class="scrollable hover">
        <div class="sidenav mt-2">
            <nav class="nav-border b-primary" data-nav>
                <ul class="nav">
                    <!--<router-link-->
                    <!--to="/contacts/"-->
                    <!--tag="li" active-class="active" exact>-->
                    <!--<category-item/>-->
                    <!--</router-link>-->
                    <router-link
                        v-for="category in categories"
                        v-bind:key="category.id"
                        :to="{name:route, params: {category_id: category.id}}"
                        tag="li" active-class="active">
                        <a href="#">
                            <span class="nav-badge">
                                <b class="badge badge-sm badge-pill warn">12</b>
                            </span>
                            <span class="nav-text">{{ category.name }}</span>
                        </a>
                    </router-link>
<!--                    <router-link-->
<!--                        v-for="category in categories"-->
<!--                        v-bind:key="category.id"-->
<!--                        :to="{name:'contactItem', params: {category_id: category.slug}}"-->
<!--                        tag="li" active-class="active"  exact>-->
<!--                        <category-item/>-->
<!--                    </router-link>-->
                </ul>
            </nav>
        </div>
    </div>



</template>

<script>
    export default {
        name: "Categories",
        data: ()=> {
            return {
                props: ['categories']
            }
        },
        computed: {
            categories(){return this.$attrs.categories},
            route(){return this.$attrs.route},
        }
    }
</script>

<style scoped>

</style>
