<template>
    <div class="app" >
        <div id="aside" class="app-aside fade box-shadow-x nav-expand white" aria-hidden="true">
            <div class="sidenav modal-dialog dk white">
                <!-- sidenav top -->
                <div class="navbar lt">
                    <!-- brand -->
                    <router-link tag="a" class="navbar-brand" to="/">
                        <svg viewBox="0 0 24 24" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z"
                                  fill="#fff" class="fill-theme" />
                        </svg>
                        <!--                    <img src="../assets/images/logo.png" alt="." class="hide">-->
                        <span class="hidden-folded d-inline">Apply</span>
                    </router-link>
                    <!-- / brand -->
                </div>
                <!-- Flex nav content -->
                <div class="flex hide-scroll">
                    <div class="scroll">
                        <div class="nav-border b-primary" data-nav>
                            <ul class="nav bg">
                                <li class="nav-header">
                                    <span class="text-xs hidden-folded">Основное</span>
                                </li>
                                <router-link tag="li" active-class="active" to="/" exact>
                                    <a href="#">
                                        <span class="nav-icon"><i class="fa fa-dashboard"></i></span>
                                        <span class="nav-text">Главная</span>
                                    </a>
                                </router-link>
                                <router-link tag="li" active-class="active" to="/categories" exact>
                                    <a href="#">
                                        <span class="nav-icon"><i class="fa fa-list"></i></span>
                                        <span class="nav-text">Категории</span>
                                    </a>
                                </router-link>
                                <router-link tag="li" active-class="active" to="/settings" exact>
                                    <a href="#">
                                        <span class="nav-icon"><i class="fa fa-cog"></i></span>
                                        <span class="nav-text">Настройки</span>
                                    </a>
                                </router-link>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- sidenav bottom -->
                <div class="no-shrink lt">
                    <div class="nav-fold">
                        <a class="d-flex p-2-3" data-toggle="dropdown">
                            <span class="avatar w-28 grey hide">J</span>
    <!--                        <img src="../assets/images/a0.jpg" alt="..." class="w-28 circle">-->
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
        <div id="content" class="app-content box-shadow-0" role="main">
            <!-- Header -->
            <div class="content-header white  box-shadow-0" id="content-header">
                <div class="navbar navbar-expand-lg">
                    <!-- btn to toggle sidenav on small screen -->
                    <a class="d-lg-none mx-2" data-toggle="modal" data-target="#aside">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                            <path d="M80 304h352v16H80zM80 248h352v16H80zM80 192h352v16H80z" />
                        </svg>
                    </a>
                    <!-- Page title -->
                    <div class="navbar-text nav-title flex" id="pageTitle"  >{{ pageName }}</div>
                    <ul class="nav flex-row order-lg-2">
                        <!-- Notification -->
                        <li class="nav-item dropdown">
                            <a class="nav-link px-3" data-toggle="dropdown">
                                <i class="fa fa-bell text-muted"></i>
                                <span class="badge badge-pill up danger">5</span>
                            </a>
                            <!-- dropdown -->
                            <div class="dropdown-menu dropdown-menu-right w-md animate fadeIn mt-2 p-0">
                                <div class="scrollable hover" style="max-height: 250px">
                                    <div class="list">
                                        <div class="list-item " data-id="item-13">
                                                    <span class="w-24 avatar circle pink">
                                      <span class="fa fa-plus"></span>
                                                    </span>
                                            <div class="list-body">
                                                <a href="" class="item-title _500">Airi Satou</a>
                                                <div class="item-except text-sm text-muted h-1x">
                                                    Looking for some client-work
                                                </div>
                                                <div class="item-tag tag hide">
                                                </div>
                                            </div>
                                            <div>
                                                <span class="item-date text-xs text-muted">12:30</span>
                                            </div>
                                        </div>
                                        <div class="list-item " data-id="item-10">
                                                    <span class="w-24 avatar circle blue">
                                      <span class="fa fa-google"></span>
                                                    </span>
                                            <div class="list-body">
                                                <a href="" class="item-title _500">Postiljonen</a>
                                                <div class="item-except text-sm text-muted h-1x">
                                                    Looking for some client-work
                                                </div>
                                                <div class="item-tag tag hide">
                                                </div>
                                            </div>
                                            <div>
                                                <span class="item-date text-xs text-muted">08:00</span>
                                            </div>
                                        </div>
                                        <div class="list-item " data-id="item-3">
                                                    <span class="w-24 avatar circle green">
                                      <span class="fa fa-html5"></span>
                                                    </span>
                                            <div class="list-body">
                                                <a href="" class="item-title _500">Jeremy Scott</a>
                                                <div class="item-except text-sm text-muted h-1x">
                                                    Submit a support ticket
                                                </div>
                                                <div class="item-tag tag hide">
                                                </div>
                                            </div>
                                            <div>
                                                <span class="item-date text-xs text-muted">09:05</span>
                                            </div>
                                        </div>
                                        <div class="list-item " data-id="item-7">
                                                    <span class="w-24 avatar circle indigo">
                                      <span class="fa fa-bug"></span>
                                                    </span>
                                            <div class="list-body">
                                                <a href="" class="item-title _500">Fifth Harmony</a>
                                                <div class="item-except text-sm text-muted h-1x">
                                                    Send you a invitation to SWO
                                                </div>
                                                <div class="item-tag tag hide">
                                                </div>
                                            </div>
                                            <div>
                                                <span class="item-date text-xs text-muted">05:35</span>
                                            </div>
                                        </div>
                                        <div class="list-item " data-id="item-12">
                                                    <span class="w-24 avatar circle green">
                                      <span class="fa fa-dot-circle-o"></span>
                                                    </span>
                                            <div class="list-body">
                                                <a href="" class="item-title _500">Ashton Cox</a>
                                                <div class="item-except text-sm text-muted h-1x">
                                                    Looking for some client-work
                                                </div>
                                                <div class="item-tag tag hide">
                                                </div>
                                            </div>
                                            <div>
                                                <span class="item-date text-xs text-muted">11:30</span>
                                            </div>
                                        </div>
                                        <div class="list-item " data-id="item-15">
                                                    <span class="w-24 avatar circle indigo">
                                      <span class="fa fa-facebook"></span>
                                                    </span>
                                            <div class="list-body">
                                                <a href="" class="item-title _500">Garrett Winters</a>
                                                <div class="item-except text-sm text-muted h-1x">
                                                    Looking for some client-work
                                                </div>
                                                <div class="item-tag tag hide">
                                                </div>
                                            </div>
                                            <div>
                                                <span class="item-date text-xs text-muted">13:00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex px-3 py-2 b-t">
                                    <div class="flex">
                                        <span>6 Notifications</span>
                                    </div>
                                    <a href="setting.html">See all
                                        <i class="fa fa-angle-right text-muted"></i>
                                    </a>
                                </div>
                            </div>
                            <!-- / dropdown -->
                        </li>
                        <!-- User dropdown menu -->
                        <li class="dropdown d-flex align-items-center">
                            <a href="#" data-toggle="dropdown" class="d-flex align-items-center">
                                        <span class="avatar w-32">
    <!--	    	          <img src="../assets/images/a3.jpg" alt="...">-->
                        </span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right w pt-0 mt-2 animate fadeIn">
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
                        </li>
                        <!-- Navarbar toggle btn -->
                        <li class="d-lg-none d-flex align-items-center">
                            <a href="#" class="mx-2" data-toggle="collapse" data-target="#navbarToggler">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
                                    <path d="M64 144h384v32H64zM64 240h384v32H64zM64 336h384v32H64z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <!-- Navbar collapse -->
                    <div class="collapse navbar-collapse no-grow order-lg-1" id="navbarToggler">
                        <form class="input-group m-2 my-lg-0">
                                    <span class="input-group-btn">
                        <button type="button" class="btn no-border no-bg no-shadow"><i class="fa fa-search"></i></button>
                      </span>
                            <input type="text" class="form-control no-border no-bg no-shadow" placeholder="Search projects...">
                        </form>
                    </div>
                </div>
            </div>
            <!-- Main -->
            <main class="content-main" id="content-main">
                <div class="app-page">
                    <router-view />
                </div>
            </main>
            <!-- Footer -->
            <div class="content-footer white " id="content-footer">
                <div class="d-flex p-3">
                    <span class="text-sm text-muted flex">&copy; Copyright. Flatfull</span>
                    <div class="text-sm text-muted">Version 1.2.0</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: ()=> {
            return {
                pageName: "Blog"
            }
        },
        created(){
            this.$eventBus.$on('set-title', this.setTitle);
        },
        mounted() {
            let pageName = "Blog";
        },
        methods: {
            setTitle: function (title) {
                this.pageName = title;
            }
        }
    }
</script>
