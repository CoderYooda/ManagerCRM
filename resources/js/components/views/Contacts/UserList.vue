<template>
    <div class="d-flex flex-column flex slide_up" id="user-list">
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
            <div class="d-flex flex-column flex white lt position-relative">
                <div data-simplebar style="height:calc(100% - 53px);width: 100%">
                    <div class="list">

                        <UserListItem
                            v-for="user in users"
                            v-bind:user="user"
                            v-bind:key="user.id"
                            >
                        </UserListItem>
                    </div>
                    <div class="no-result hide">
                        <div class="p-4 text-center">
                            Результатов нет
                        </div>
                    </div>
                </div>
                <div class="p-3 b-t mt-auto">
                    <div class="d-flex align-items-center">
                        <div class="flex">
                            <div class="pagination pagination-xs">
                            </div>
                        </div>
                        <div>
                            <span class="text-muted">Total:</span>
                            <span id="count"></span>
                        </div>
                    </div>
                </div>
            </div>
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
</template>

<script>
    import UserListItem from './UserListItem'
    export default {
        name: "UserList",
        components: {
            UserListItem
        },
        data: ()=> {
            return {
                users: null,
                category_id: null,
                errored: false,
                loading: false
            }
        },
        watch: {
            '$route' (to, from) {
                this.getUsers();
            }
        },
        mounted(){
            this.getUsers();
        },
        methods: {
            getUsers(){
                this.category_id = this.$attrs.category_id;
                this.loading = true;
                axios
                    .get('/data/categories/contacts.json')
                    .then(response => {
                        this.users = response.data;
                        console.log('Контакты обновлены');
                    })
                    .catch(error => {
                        console.log(error);
                        this.errored = true;
                    })
                    .finally(() => (this.loading = false));
            }
        }
    }
</script>

<style scoped>

</style>
