<template>
    <div class="list-item">
        <div class="list-body">
            <router-link
                v-bind:key="entity_id"
                :to="{name:'record', params: {entity_id: entity_id}}"
                tag="a" active-class="active"  exact>
                {{ lastname }} {{ firstname }} {{ patronymic }}
            </router-link>

<!--            <a href="#" class="item-title _500">{{ lastname }} {{ firstname }} {{ patronymic }}</a>-->
            <div class="item-tag tag hide">
                Team
            </div>
        </div>
        <div>
            <div class="item-action dropdown">
                <a href="#" data-toggle="dropdown" class="text-muted">
                    <i class="fa fa-fw fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right text-color" role="menu">
                    <a class="dropdown-item">
                        <i class="fa fa-tag"></i>
                        Action
                    </a>
                    <a class="dropdown-item">
                        <i class="fa fa-pencil"></i>
                        Another action
                    </a>
                    <a class="dropdown-item">
                        <i class="fa fa-reply"></i>
                        Something else here
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item">
                        <i class="fa fa-ellipsis-h"></i>
                        Separated link
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: ()=> {
            return {
                props: ['reference'],
            }
        },
        computed: {
            entity_id(){return this.$attrs.reference.id},
            firstname(){return this.$attrs.reference.name.first},
            lastname(){ return this.$attrs.reference.name.last},
            patronymic(){return this.$attrs.reference.name.patronymic}
        }
    }
</script>

<style scoped>

</style>
