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
                                    <li>
                                        <a href="app.user.html#all">
                                                            <span class="nav-badge">
                                            <b class="badge badge-sm badge-pill warn">12</b>
                                        </span>
                                            <span class="nav-text">All</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="app.user.html#company">
                                                            <span class="nav-badge">
                                            <b class="badge badge-sm badge-pill primary">4</b>
                                        </span>
                                            <span class="nav-text">Company</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="app.user.html#personal">
                                            <span class="nav-text">Personal</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="app.user.html#team">
                                                            <span class="nav-badge">
                                            <b class="badge badge-sm badge-pill">6</b>
                                        </span>
                                            <span class="nav-text">Team</span>
                                        </a>
                                    </li>
                                    <li class="nav-header hidden-folded mt-2">
                                        <span class="d-block pt-1 text-sm text-muted _600">Tags</span>
                                    </li>
                                    <li>
                                        <a href="app.user.html#client">
                                                            <span class="nav-badge">
                                            <b class="badge badge-xs primary">&nbsp;</b>
                                        </span>
                                            <span class="nav-text">Clients</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="app.user.html#supplier">
                                                            <span class="nav-badge">
                                            <b class="badge badge-xs warn">&nbsp;</b>
                                        </span>
                                            <span class="nav-text">Suppliers</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="app.user.html#competitor">
                                                            <span class="nav-badge">
                                            <b class="badge badge-xs">&nbsp;</b>
                                        </span>
                                            <span class="nav-text">Competitors</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="app.user.html#corp">
                                                            <span class="nav-badge">
                                            <b class="badge badge-xs success">&nbsp;</b>
                                        </span>
                                            <span class="nav-text">Corps</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <!-- / -->
                    <!-- footer -->
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
                    <!-- / -->
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
                    <div class="d-flex flex-column flex white lt">
                        <div class="scroll-y">
                            <div class="list hide">
                                <div class="list-item " data-id="item-5">
                                                    <span class="w-40 avatar circle blue-grey">
			      			        <i class="on b-white avatar-right"></i>
			      			          R
			      			      </span>
                                    <div class="list-body">
                                        <a href="app.user.detail.html#item-5" class="item-title _500">Radionomy</a>
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
                                <div class="list-item " data-id="item-12">
                                                    <span class="w-40 avatar circle green">
			      			        <i class="off b-white avatar-right"></i>
			      			          AC
			      			      </span>
                                    <div class="list-body">
                                        <a href="app.user.detail.html#item-12" class="item-title _500">Ashton Cox</a>
                                        <div class="item-except text-sm text-muted h-1x">
                                            ashton-cox@gmail.com
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
                                <div class="list-item " data-id="item-3">
                                                    <span class="w-40 avatar circle green">
			      			        <i class="away b-white avatar-right"></i>
			      			          JS
			      			      </span>
                                    <div class="list-body">
                                        <a href="app.user.detail.html#item-3" class="item-title _500">Jeremy Scott</a>
                                        <div class="item-except text-sm text-muted h-1x">
                                            jeremy-scott@gmail.com
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
                                <div class="list-item " data-id="item-7">
                                                    <span class="w-40 avatar circle indigo">
			      			        <i class="on b-white avatar-right"></i>
			      			          FH
			      			      </span>
                                    <div class="list-body">
                                        <a href="app.user.detail.html#item-7" class="item-title _500">Fifth Harmony</a>
                                        <div class="item-except text-sm text-muted h-1x">
                                            fifth-harmony@gmail.com
                                        </div>
                                        <div class="item-tag tag hide">
                                            Partners
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
                                <div class="list-item " data-id="item-4">
                                                    <span class="w-40 avatar circle pink">
			      			        <i class="busy b-white avatar-right"></i>
			      			          JG
			      			      </span>
                                    <div class="list-body">
                                        <a href="app.user.detail.html#item-4" class="item-title _500">Judith Garcia</a>
                                        <div class="item-except text-sm text-muted h-1x">
                                            judith-garcia@gmail.com
                                        </div>
                                        <div class="item-tag tag hide">
                                            Partners
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
                                <div class="list-item " data-id="item-14">
                                                    <span class="w-40 avatar circle brown">
			      			        <i class="off b-white avatar-right"></i>
			      			          BW
			      			      </span>
                                    <div class="list-body">
                                        <a href="app.user.detail.html#item-14" class="item-title _500">Brielle Williamson</a>
                                        <div class="item-except text-sm text-muted h-1x">
                                            brielle-williamson@gmail.com
                                        </div>
                                        <div class="item-tag tag hide">
                                            Company
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
                                <div class="list-item " data-id="item-6">
                                                    <span class="w-40 avatar circle brown">
			      			        <i class="on b-white avatar-right"></i>
			      			          RO
			      			      </span>
                                    <div class="list-body">
                                        <a href="app.user.detail.html#item-6" class="item-title _500">Rita Ora</a>
                                        <div class="item-except text-sm text-muted h-1x">
                                            rita-ora@gmail.com
                                        </div>
                                        <div class="item-tag tag hide">
                                            Personal
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
                                <div class="list-item " data-id="item-1">
                                                    <span class="w-40 avatar circle grey">
			      			        <i class="on b-white avatar-right"></i>
			      			          S
			      			      </span>
                                    <div class="list-body">
                                        <a href="app.user.detail.html#item-1" class="item-title _500">Summerella</a>
                                        <div class="item-except text-sm text-muted h-1x">
                                            summerella@gmail.com
                                        </div>
                                        <div class="item-tag tag hide">
                                            Suppliers
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
                                <div class="list-item " data-id="item-8">
                                                    <span class="w-40 avatar circle teal">
			      			        <i class="on b-white avatar-right"></i>
			      			          R
			      			      </span>
                                    <div class="list-body">
                                        <a href="app.user.detail.html#item-8" class="item-title _500">RYD</a>
                                        <div class="item-except text-sm text-muted h-1x">
                                            ryd@gmail.com
                                        </div>
                                        <div class="item-tag tag hide">
                                            Suppliers
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
                                <div class="list-item " data-id="item-9">
                                                    <span class="w-40 avatar circle cyan">
			      			        <i class="on b-white avatar-right"></i>
			      			          PN
			      			      </span>
                                    <div class="list-body">
                                        <a href="app.user.detail.html#item-9" class="item-title _500">Pablo Nouvelle</a>
                                        <div class="item-except text-sm text-muted h-1x">
                                            pablo-nouvelle@gmail.com
                                        </div>
                                        <div class="item-tag tag hide">
                                            Clients
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
                                <div class="list-item " data-id="item-2">
                                                    <span class="w-40 avatar circle light-blue">
			      			        <i class="off b-white avatar-right"></i>
			      			          K
			      			      </span>
                                    <div class="list-body">
                                        <a href="app.user.detail.html#item-2" class="item-title _500">Kygo</a>
                                        <div class="item-except text-sm text-muted h-1x">
                                            kygo@gmail.com
                                        </div>
                                        <div class="item-tag tag hide">
                                            Personal
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
                                <div class="list-item " data-id="item-10">
                                                    <span class="w-40 avatar circle blue">
			      			        <i class="on b-white avatar-right"></i>
			      			          P
			      			      </span>
                                    <div class="list-body">
                                        <a href="app.user.detail.html#item-10" class="item-title _500">Postiljonen</a>
                                        <div class="item-except text-sm text-muted h-1x">
                                            postiljonen@gmail.com
                                        </div>
                                        <div class="item-tag tag hide">
                                            Partners
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
    export default {

    }
</script>

<style scoped>

</style>
