<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">



{{--    <link rel="stylesheet" href="../libs/font-awesome/css/font-awesome.min.css" type="text/css" />--}}
{{--    <link rel="stylesheet" href="../libs/bootstrap/dist/css/bootstrap.min.css" type="text/css" />--}}
{{--    <link rel="stylesheet" href="../assets/css/app.css" type="text/css" />--}}
{{--    <link rel="stylesheet" href="../assets/css/style.css" type="text/css" />--}}

</head>
<body>
<div class="app" id="app">
    <!-- ############ LAYOUT START-->
    <!-- ############ Aside START-->
    <div id="aside" class="app-aside fade box-shadow-x nav-expand white" aria-hidden="true">
        <div class="sidenav modal-dialog dk white">
            <!-- sidenav top -->
            <div class="navbar lt">
                <!-- brand -->
                <a href="index.html" class="navbar-brand">
                    <svg viewBox="0 0 24 24" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z"
                              fill="#fff" class="fill-theme" />
                    </svg>
                    <img src="../assets/images/logo.png" alt="." class="hide">
                    <span class="hidden-folded d-inline">Apply</span>
                </a>
                <!-- / brand -->
            </div>

            <aside></aside>
            <!-- Flex nav content -->
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
                            <li>
                                <a href="dashboard.html">
                                    <span class="nav-icon"><i class="fa fa-dashboard"></i></span>
                                    <span class="nav-text">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="nav-caret"><i class="fa fa-caret-down"></i></span>
                                    <span class="nav-icon"><i class="fa fa-align-left"></i></span>
                                    <span class="nav-text">Layout</span>
                                </a>
                                <ul class="nav-sub">
                                    <li>
                                        <a href="layout.header.html">
                                            <span class="nav-text">Header</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="layout.sidenav.html">
                                            <span class="nav-text">Sidenav</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="layout.aside.html">
                                            <span class="nav-text">Aside</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="layout.flex.html">
                                            <span class="nav-text">Flex</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="app.inbox.html">
                                    <span class="nav-badge"><b class="badge badge-sm badge-pill success">6</b></span>
                                    <span class="nav-icon"><i class="fa fa-envelope"></i></span>
                                    <span class="nav-text">Inbox</span>
                                </a>
                            </li>
                            <li>
                                <a href="app.message.html">
                                    <span class="nav-icon"><i class="fa fa-comment"></i></span>
                                    <span class="nav-text">Messages</span>
                                </a>
                            </li>
                            <li>
                                <a href="app.user.html">
                                    <span class="nav-icon"><i class="fa fa-phone-square"></i></span>
                                    <span class="nav-text">Users</span>
                                </a>
                            </li>
                            <li class="pb-2 hidden-folded"></li>
                        </ul>
                        <ul class="nav ">
                            <li class="nav-header hidden-folded mt-2">
                                <span class="text-xs">UI Elements</span>
                            </li>
                            <li>
                                <a>
                                    <span class="nav-caret"><i class="fa fa-caret-down"></i></span>
                                    <span class="nav-icon no-fade"><i class="badge badge-xs badge-o md b-warning"></i></span>
                                    <span class="nav-text">UI kit</span>
                                </a>
                                <ul class="nav-sub nav-mega nav-mega-3">
                                    <li>
                                        <a href="ui.arrow.html">
                                            <span class="nav-text">Arrow</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.badge.html">
                                            <span class="nav-text">Badge</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.box.html">
                                            <span class="nav-text">Box</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.button.html">
                                            <span class="nav-text">Button</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.color.html">
                                            <span class="nav-text">Color</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.dropdown.html">
                                            <span class="nav-text">Dropdown</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.grid.html">
                                            <span class="nav-text">Grid</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.icon.html">
                                            <span class="nav-text">Icon</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.list.html">
                                            <span class="nav-text">List Group</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.modal.html">
                                            <span class="nav-text">Modal</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.nav.html">
                                            <span class="nav-text">Nav</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.streamline.html">
                                            <span class="nav-text">Streamline</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.timeline.html">
                                            <span class="nav-text">Timeline</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.widget.html">
                                            <span class="nav-text">Widget</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>
                                    <span class="nav-caret"><i class="fa fa-caret-down"></i></span>
                                    <span class="nav-icon no-fade"><i class="badge badge-xs badge-o md b-success"></i></span>
                                    <span class="nav-text">Components</span>
                                </a>
                                <ul class="nav-sub nav-mega">
                                    <li>
                                        <a href="ui.calendar.html">
                                            <span class="nav-text">Calendar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.scroll.html">
                                            <span class="nav-text">Infinite Scroll</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.sortable.html">
                                            <span class="nav-text">Sortable</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.scrollreveal.html">
                                            <span class="nav-text">Scroll Reveal</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui.map.html">
                                            <span class="nav-text">Vector map</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>
                                    <span class="nav-caret"><i class="fa fa-caret-down"></i></span>
                                    <span class="nav-icon no-fade"><i class="badge badge-xs badge-o md b-primary"></i></span>
                                    <span class="nav-text">Form</span>
                                </a>
                                <ul class="nav-sub">
                                    <li>
                                        <a href="form.layout.html">
                                            <span class="nav-text">Form Layout</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form.element.html">
                                            <span class="nav-text">Form Element</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form.validation.html">
                                            <span class="nav-text">Form Validation</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form.editor.html">
                                            <span class="nav-text">Editor</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form.picker.html">
                                            <span class="nav-text">Picker</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form.select.html">
                                            <span class="nav-text">Select</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form.wizard.html">
                                            <span class="nav-text">Wizard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="form.dropzone.html">
                                            <span class="nav-text">File Upload</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>
                                    <span class="nav-caret"><i class="fa fa-caret-down"></i></span>
                                    <span class="nav-icon"><i class="badge badge-xs badge-o md"></i></span>
                                    <span class="nav-text">Tables</span>
                                </a>
                                <ul class="nav-sub">
                                    <li>
                                        <a href="static.html">
                                            <span class="nav-text">Static table</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="bootstrap.table.html">
                                            <span class="nav-text">Bootstrap Table</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="datatable.html">
                                            <span class="nav-text">Datatable</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>
                                    <span class="nav-caret"><i class="fa fa-caret-down"></i></span>
                                    <span class="nav-icon"><i class="badge badge-xs badge-o md"></i></span>
                                    <span class="nav-text">Charts</span>
                                </a>
                                <ul class="nav-sub">
                                    <li>
                                        <a href="chart.html">
                                            <span class="nav-text">Chart</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chart.peity.html">
                                            <span class="nav-text">Peity</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chartjs.html">
                                            <span class="nav-text">Chartjs</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-header hidden-folded mt-2">
                                <span class="text-xs">Extras</span>
                            </li>
                            <li>
                                <a>
                                    <span class="nav-caret"><i class="fa fa-caret-down"></i></span>
                                    <span class="nav-icon"><i class="badge badge-xs badge-o md"></i></span>
                                    <span class="nav-text">Pages</span>
                                </a>
                                <ul class="nav-sub nav-mega">
                                    <li>
                                        <a href="profile.html">
                                            <span class="nav-text">Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="setting.html">
                                            <span class="nav-text">Setting</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="search.html">
                                            <span class="nav-text">Search</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="faq.html">
                                            <span class="nav-text">FAQ</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="gallery.html">
                                            <span class="nav-text">Gallery</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="invoice.html">
                                            <span class="nav-text">Invoice</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="price.html">
                                            <span class="nav-text">Price</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blank.html">
                                            <span class="nav-text">Blank</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>
                                    <span class="nav-caret"><i class="fa fa-caret-down"></i></span>
                                    <span class="nav-icon"><i class="badge badge-xs badge-o md"></i></span>
                                    <span class="nav-text">Access</span>
                                </a>
                                <ul class="nav-sub nav-mega">
                                    <li>
                                        <a href="signin.html">
                                            <span class="nav-text">Sign In</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="signup.html">
                                            <span class="nav-text">Sign Up</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="forgot-password.html">
                                            <span class="nav-text">Forgot Password</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="lockme.html">
                                            <span class="nav-text">Lockme Screen</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="404.html">
                                            <span class="nav-text">Error 404</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="505.html">
                                            <span class="nav-text">Error 505</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="mb-3">
                                <a>
                                    <span class="nav-caret"><i class="fa fa-caret-down"></i></span>
                                    <span class="nav-icon"><i class="badge badge-xs badge-o md"></i></span>
                                    <span class="nav-text">Multi level</span>
                                </a>
                                <ul class="nav-sub nav-mega">
                                    <li>
                                        <a href="#sub_1">
                                            <span class="nav-text">Level one</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#sub_1_">
                                            <span class="nav-caret"><i class="fa fa-caret-down"></i></span>
                                            <span class="nav-text">Level one</span>
                                        </a>
                                        <ul class="nav-sub nav-mega">
                                            <li>
                                                <a href="#sub_2">
                                                    <span class="nav-text">Level two</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#sub_2_">
                                                    <span class="nav-caret"><i class="fa fa-caret-down"></i></span>
                                                    <span class="nav-text">Level two</span>
                                                </a>
                                                <ul class="nav-sub nav-mega">
                                                    <li>
                                                        <a href="#sub_3_1">
                                                            <span class="nav-text">Level three</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#sub_3_2">
                                                            <span class="nav-text">Level three</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- sidenav bottom -->
            <div class="no-shrink lt">
                <div class="nav-fold">
                    <a class="d-flex p-2-3" data-toggle="dropdown">
                        <span class="avatar w-28 grey hide">J</span>
                        <img src="../assets/images/a0.jpg" alt="..." class="w-28 circle">
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
    <!-- ############ Aside END-->
    <!-- ############ Content START-->
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
                <div class="navbar-text nav-title flex" id="pageTitle">Blank</div>
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
	    	          <img src="../assets/images/a3.jpg" alt="...">
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
        <div class="content-main " id="content-main">
            <!-- ############ Main START-->1
            <router-view name="index"></router-view>
            <router-view></router-view>
            <!-- ############ Main END-->
        </div>
        <!-- Footer -->
        <div class="content-footer white " id="content-footer">
            <div class="d-flex p-3">
                <span class="text-sm text-muted flex">&copy; Copyright. Flatfull</span>
                <div class="text-sm text-muted">Version 1.2.0</div>
            </div>
        </div>
    </div>
    <!-- ############ Content END-->
    <!-- ############ LAYOUT END-->
</div>
</body>
</html>
