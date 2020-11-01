<template>
    <div class="list-item">
            <span class="w-40 avatar circle blue-grey">
            <i class="on b-white avatar-right"></i>
              R
            </span>
        <div class="list-body">
            <router-link
                v-bind:key="entity_id"
                :to="{name:'contact', params: {entity_id: entity_id}}"
                tag="a" active-class="active"  exact>
                {{ lastname }} {{ firstname }} {{ patronymic }}
            </router-link>

<!--            <a href="#" class="item-title _500">{{ lastname }} {{ firstname }} {{ patronymic }}</a>-->
            <div class="item-except text-sm text-muted h-1x">
                radionomy@gmail.com
            </div>
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
                props: ['user'],
            }
        },
        computed: {
            entity_id(){return this.$attrs.user.id},
            firstname(){return this.$attrs.user.name.first},
            lastname(){ return this.$attrs.user.name.last},
            patronymic(){return this.$attrs.user.name.patronymic}
        }
    }
</script>

<style scoped>

</style>
