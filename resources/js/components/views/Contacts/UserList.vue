<template>
    <div class="d-flex flex-column flex white lt">
        <div class="scroll-y">
            <div class="list">
                <UserListItem/>
                <UserListItem/>
                <UserListItem/>
            </div>
            <div class="no-result hide">
                <div class="p-4 text-center">
                    No Results
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
                state: 1,
            }
        },
        beforeRouteUpdate(to, from, next){
            console.log(to, from, next);
            next();
        },
        watch:{
            $attrs (to, from){
                console.log(to.category_id, from.category_id);
            }
        },
        mounted() {
            console.log(1);
        }
    }
</script>

<style scoped>

</style>
