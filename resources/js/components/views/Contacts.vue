<template>
    <div class="d-flex flex">
        <div class="d-flex flex" data-plugin="user">
            <div class="fade aside aside-sm b-r" id="content-aside">
                <div class="modal-dialog d-flex flex-column w-md light lt" id="user-nav">
                    <div class="navbar white no-radius box-shadow pos-rlt">
                        <span class="text-md">Groups</span>
                    </div>
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
                                            :to="{name:'contactItem', params: {category_id: category.slug}}"
                                            tag="li" active-class="active"  exact>
                                        <category-item/>
                                    </router-link>
                                    <router-link
                                        v-for="category in categories"
                                        v-bind:key="category.id"
                                        :to="{name:'contactItem', params: {category_id: category.slug}}"
                                        tag="li" active-class="active"  exact>
                                        <category-item/>
                                    </router-link>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="p-2 mt-auto p-3">
                        <div class="input-group">
                            <input type="text" class="form-control form-control-sm" id="newField" placeholder="New group" required>
                            <span class="input-group-append">
                          <button class="btn btn-default btn-sm no-shadow" type="button" id="newBtn">
                            <i class="fa fa-plus text-muted"></i>
                          </button>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        <div class="d-flex flex" id="content-body">
            <div class="d-flex flex-column flex" id="user-list">
                <div class="navbar white no-radius box-shadow pos-rlt">
                    <form class="flex">
                        <div class="input-group">
                            <input type="text" class="form-control form-control-sm search" placeholder="Search" required>
                            <span class="input-group-append">
		                	<button class="btn btn-default btn-sm no-shadow" type="button"><i class="fa fa-search"></i></button>
		              	</span>
                        </div>
                    </form>
                    <button class="btn btn-sm white ml-1 sort" data-sort="item-title" data-toggle="tooltip" title="Sort">
                        <i class="fa fa-sort"></i>
                    </button>
                    <a data-toggle="modal" data-target="#content-aside" data-modal class="ml-1 d-md-none">
                                        <span class="btn btn-sm btn-icon primary">
			      		<i class="fa fa-th"></i>
			        </span>
                    </a>
                </div>
                <div class="d-flex flex scroll-y">
                    <router-view></router-view>
                    <div class="d-flex flex-column b-l" style="width: 50px">
                        <div class="scrollable hover">
                            <div class="text-center text-sm py-3 d-flex flex-column" id="filter">
                                <a href="#">A</a>
                                <a href="#">B</a>
                                <a href="#">C</a>
                                <a href="#">D</a>
                                <a href="#">E</a>
                                <a href="#">F</a>
                                <a href="#">G</a>
                                <a href="#">H</a>
                                <a href="#">I</a>
                                <a href="#">J</a>
                                <a href="#">K</a>
                                <a href="#">L</a>
                                <a href="#">M</a>
                                <a href="#">N</a>
                                <a href="#">O</a>
                                <a href="#">P</a>
                                <a href="#">Q</a>
                                <a href="#">R</a>
                                <a href="#">S</a>
                                <a href="#">T</a>
                                <a href="#">U</a>
                                <a href="#">V</a>
                                <a href="#">W</a>
                                <a href="#">X</a>
                                <a href="#">Y</a>
                                <a href="#">Z</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import CategoryItem from "./Contacts/CategoryItem";
    export default {
        data: ()=> {
            return {
                categories: null,
                loading: true,
                errored: false
            }
        },
        components: {
            CategoryItem,
        },
        mounted() {
            console.log('ToServer');
            axios
                .get('/data/categories/categories.json')
                .then(response => {
                    this.categories = response.data;
                })
                .catch(error => {
                    console.log(error);
                    this.errored = true;
                })
                .finally(() => (this.loading = false));
        }
    }
</script>

<style scoped>

</style>
