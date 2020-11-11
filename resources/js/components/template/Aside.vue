<template>
    <div id="aside" v-bind:class="{ dark: asideDark }" class="app-aside fade box-shadow-x nav-expand white" aria-hidden="true">
        <div class="sidenav modal-dialog dk white">
            <div class="navbar lt">
                <router-link tag="a" class="navbar-brand" to="/">
                    <svg viewBox="0 0 24 24" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z"
                              fill="#fff" class="fill-theme" />
                    </svg>
                    <!--<img src="../assets/images/logo.png" alt="." class="hide">-->
                    <span class="hidden-folded d-inline">Apply</span>
                </router-link>
            </div>
            <div class="flex hide-scroll">
                <div class="scroll">
                    <div class="nav-border b-primary" data-nav>
                        <ul class="nav bg">
                            <li class="nav-header">
                                <div class="py-3">
                                    <a href="#" class="btn btn-sm success theme-accent btn-block">
                                        <i class="fa fa-fw fa-plus"></i>
                                        <span class="hidden-folded d-inline">New Project</span>
                                    </a>
                                </div>
                                <span class="text-xs hidden-folded">Main</span>
                            </li>
                            <li class="nav-header">
                                <span class="text-xs hidden-folded">Основное</span>
                            </li>
                            <router-link tag="li" active-class="active" to="/" exact>
                                <a href="#">
                                    <span class="nav-icon"><i class="fa fa-dashboard"></i></span>
                                    <span class="nav-text">Главная</span>
                                </a>
                            </router-link>
                            <router-link tag="li" active-class="active" to="/scripture" exact>
                                <a href="#">
                                    <span class="nav-icon"><i class="fa fa-dashboard"></i></span>
                                    <span class="nav-text">Скриптор</span>
                                </a>
                            </router-link>
                            <router-link tag="li" active-class="active" to="/categories" exact>
                                <a href="#">
                                    <span class="nav-icon"><i class="fa fa-list"></i></span>
                                    <span class="nav-text">Категории</span>
                                </a>
                            </router-link>
                            <router-link tag="li" active-class="active" to="/im" exact>
                                <a href="#">
                                    <span class="nav-icon"><i class="fa fa-comments"></i></span>
                                    <span class="nav-text">Мессенджер</span>
                                </a>
                            </router-link>
                            <router-link tag="li" active-class="active" to="/contacts">
                                <a href="#">
                                    <span class="nav-icon"><i class="fa fa-users"></i></span>
                                    <span class="nav-text">Контакты</span>
                                </a>
                            </router-link>
                            <router-link tag="li" active-class="active" to="/settings">
                                <a href="#">
                                    <span class="nav-icon"><i class="fa fa-cog"></i></span>
                                    <span class="nav-text">Настройки</span>
                                </a>
                            </router-link>
                            <router-link tag="li" active-class="active" to="/references">
                                <a href="#">
                                    <span class="nav-icon"><i class="fa fa-cog"></i></span>
                                    <span class="nav-text">Справочники</span>
                                </a>
                            </router-link>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="no-shrink lt">
                <div class="nav-fold">
                    <a class="d-flex p-2-3" data-toggle="dropdown">
                        <span class="avatar w-28 grey hide">J</span>
                        <!--<img src="../assets/images/a0.jpg" alt="..." class="w-28 circle">-->
                    </a>
                    <div class="dropdown-menu  w pt-0 mt-2 animate fadeIn">
                        <div class="row no-gutters b-b mb-2">
                            <div class="col-4 b-r">
                                <a href="app.user.html" class="py-2 pt-3 d-block text-center">
                                    <i class="fa text-md fa-phone-square text-muted"></i>
                                    <small class="d-block">Call</small>
                                </a>
                            </div>
                            <div class="col-4 b-r">
                                <a href="app.message.html" class="py-2 pt-3 d-block text-center">
                                    <i class="fa text-md fa-comment text-muted"></i>
                                    <small class="d-block">Chat</small>
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="app.inbox.html" class="py-2 pt-3 d-block text-center">
                                    <i class="fa text-md fa-envelope text-muted"></i>
                                    <small class="d-block">Email</small>
                                </a>
                            </div>
                        </div>
                        <a class="dropdown-item" href="profile.html">
                            <span>Profile</span>
                        </a>
                        <a class="dropdown-item" href="setting.html">
                            <span>Settings</span>
                        </a>
                        <a class="dropdown-item" href="app.inbox.html">
                            <span class="float-right"><span class="badge info">6</span></span>
                            <span>Inbox</span>
                        </a>
                        <a class="dropdown-item" href="app.message.html">
                            <span>Message</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="docs.html">
                            Need help?
                        </a>
                        <a class="dropdown-item" href="signin.html">Sign out</a>
                    </div>
                    <div class="hidden-folded flex p-2-3 bg">
                        <div class="d-flex p-1">
                            <a href="app.inbox.html" class="flex text-nowrap">
                                <i class="fa fa-bell text-muted mr-1"></i>
                                <span class="badge badge-pill theme">20</span>
                            </a>
                            <a href="lockme.html" class="px-2" data-toggle="tooltip" title="Logout">
                                <i class="fa fa-power-off text-muted"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: ()=> {
            return {
                asideDark: false,
            }
        },
        created(){
            this.loadTheme();
            this.$eventBus.$on('themeChanged', ()=>{
                this.loadTheme();
            });
        },
        mounted() {
        },
        methods: {
            loadTheme(){
                let aside = this.getFromLocalStorage('aside_class');
                if(aside && aside === 'dark'){
                    this.asideDark = true;
                } else {
                    this.asideDark = false;
                }
            },
            setTitle: function (title) {
                this.pageName = title;
            }
        },
    }
</script>

<style scoped>

</style>
