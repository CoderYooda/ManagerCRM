<template>
    <div class="flex-1 flex">
        <div class="d-sm-flex">
            <div class="w w-auto-xs light bg bg-auto-sm b-r">
                <div class="py-3">
                    <div class="nav-active-border left b-primary">
                        <ul class="nav flex-column nav-sm">
                            <li class="nav-item">
                                <router-link tag="a" class="nav-link" active-class="active" to="/settings/" exact>Основные</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link tag="a" class="nav-link" active-class="active" to="/settings/profile" exact>Профиль</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link tag="a" class="nav-link" active-class="active" to="/settings/account" exact>Учетная запись</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link tag="a" class="nav-link" active-class="active" to="/settings/image" exact>Изображения</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col p-0">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: ()=> {
            return {
                pageName: "1231231"
            }
        },
        mounted() {
            this.$eventBus.$emit('set-title', 'Настройки');
        },
        methods: {
        }
    }
</script>
