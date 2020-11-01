<template>
    <div class="d-flex flex">
        <div class="d-flex flex" data-plugin="user">
            <div class="aside aside-sm b-r overflow-hidden" id="content-aside">
                <div class="modal-dialog d-flex flex-column w-md light lt slide_up" id="user-nav">
                    <div class="navbar white no-radius box-shadow pos-rlt">
                        <span class="text-md">Groups</span>
                    </div>
                    <Categories v-bind:categories="categories" v-bind:route="'contactItem'"/>
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
        <div class="d-flex flex overflow-hidden" id="content-body">
            <router-view></router-view>
        </div>
    </div>
    </div>
</template>

<script>
    import Categories from "../template/Categories/Categories";
    export default {
        data: ()=> {
            return {
                categories: null,
                loading: true,
                errored: false
            }
        },
        components: {
            Categories
        },

        mounted() {

            axios
                .get('/data/categories/categories.json')
                .then(response => {
                    this.categories = response.data;
                    console.log('категории обновлены');
                })
                .catch(error => {
                    console.log(error);
                    this.errored = true;
                })
                .finally(() => (this.loading = false));
        }
    }
</script>
