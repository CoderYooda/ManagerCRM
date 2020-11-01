<template>
    <div class="d-flex flex" data-plugin="chat">
        <div class="fade aside aside-sm overflow-hidden" id="content-aside">
            <div class="d-flex flex-column w-xl b-r white modal-dialog slide_up" id="chat-nav">
                <div class="navbar box-shadow">
                    <div class="input-group flex">
                        <input type="text" class="form-control px-0 no-bg no-border no-shadow search" placeholder="Search" required="">
                        <span class="input-group-btn">
	                	<button class="btn no-bg no-border no-shadow" type="button"><i class="fa fa-search text-muted"></i></button>
	              	</span>
                    </div>
                </div>
                <div class="scrollable hover">
                    <div class="list inset">
                        <div class="p-2 px-3 text-muted text-sm">Messages</div>
                        <div class="list-item " data-id="item-11">
                                            <span class="w-40 avatar circle blue">
	      			        <i class="on b-white avatar-right"></i>
	      			            TN
	      			      </span>
                            <div class="list-body">
                                <a href="app.message.html" class="item-title _500">Tiger Nixon</a>
                                <div class="item-except text-sm text-muted h-1x">
                                    Looking for some client-work
                                </div>
                                <div class="item-tag tag hide">
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div class="list-item " data-id="item-9">
                                            <span class="w-40 avatar circle cyan">
	      			        <i class="on b-white avatar-right"></i>
	      			          <img src="http://placehold.it/32x32" alt=".">
	      			      </span>
                            <div class="list-body">
                                <a href="app.message.html" class="item-title _500">Pablo Nouvelle</a>
                                <div class="item-except text-sm text-muted h-1x">
                                    It&#x27;s been a Javascript kind of day
                                </div>
                                <div class="item-tag tag hide">
                                </div>
                            </div>
                            <div>
                                                <span class="item-meta text-xs badge badge-sm badge-pill lt">
	      			              5
	      			            </span>
                            </div>
                        </div>
                        <div class="list-item " data-id="item-4">
                                            <span class="w-40 avatar circle pink">
	      			        <i class="busy b-white avatar-right"></i>
	      			          <img src="http://placehold.it/32x32" alt=".">
	      			      </span>
                            <div class="list-body">
                                <a href="app.message.html" class="item-title _500">Judith Garcia</a>
                                <div class="item-except text-sm text-muted h-1x">
                                    Eddel upload a media
                                </div>
                                <div class="item-tag tag hide">
                                </div>
                            </div>
                            <div>
                                                <span class="item-meta text-xs badge badge-sm badge-pill lt">
	      			              20
	      			            </span>
                            </div>
                        </div>
                        <div class="list-item " data-id="item-3">
                                            <span class="w-40 avatar circle green">
	      			        <i class="away b-white avatar-right"></i>
	      			          <img src="http://placehold.it/32x32" alt=".">
	      			      </span>
                            <div class="list-body">
                                <a href="app.message.html" class="item-title _500">Jeremy Scott</a>
                                <div class="item-except text-sm text-muted h-1x">
                                    Submit a support ticket
                                </div>
                                <div class="item-tag tag hide">
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div class="list-item " data-id="item-10">
                                            <span class="w-40 avatar circle blue">
	      			        <i class="on b-white avatar-right"></i>
	      			          <img src="http://placehold.it/32x32" alt=".">
	      			      </span>
                            <div class="list-body">
                                <a href="app.message.html" class="item-title _500">Postiljonen</a>
                                <div class="item-except text-sm text-muted h-1x">
                                    Looking for some client-work
                                </div>
                                <div class="item-tag tag hide">
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div class="p-2 px-3 text-muted text-sm">Groups</div>
                        <div class="list-item">
                                            <span class="w-40 avatar circle">
	  			            <span class="w-40 avatar primary">WG</span>
                                            </span>
                            <div class="list-body">
                                <a href="app.message.html" class="_500 item-title">Work group</a>
                                <small class="block text-muted text-ellipsis">
                                    32 persons
                                </small>
                            </div>
                            <div>
                                <span class="badge danger badge-pill">30+</span>
                            </div>
                        </div>
                        <div class="list-item">
                                            <span class="w-40 avatar circle">
	  			            <span class="w-40 avatar info">TG</span>
                                            </span>
                            <div class="list-body">
                                <a href="app.message.html" class="_500 item-title">Team group</a>
                                <small class="block text-muted text-ellipsis">
                                    120 persons
                                </small>
                            </div>
                        </div>
                    </div>
                    <div class="no-result hide">
                        <div class="p-4 text-center">
                            No Results
                        </div>
                    </div>
                </div>
                <div class="p-3 mt-auto">
                    <span class="text-sm text-muted">Messages: 90+</span>
                </div>
            </div>
        </div>
        <div class="d-flex flex overflow-hidden" id="content-body">
            <div class="d-flex flex-column flex slide_up" id="chat-list">
                <div class="navbar flex-nowrap white lt box-shadow">
                    <a data-toggle="modal" data-target="#content-aside" data-modal class="mr-1 d-md-none">
                                        <span class="btn btn-sm btn-icon primary">
			      		<i class="fa fa-th"></i>
			        </span>
                    </a>
                    <span class="text-md text-ellipsis flex">
		        	Chat with Robot
		        </span>
                    <ul class="nav nav-xs flex-row no-border">
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="modal" data-target="#profile" data-modal>
                                                <span class="btn btn-sm btn-icon btn-rounded success">
					      		<i class="fa fa-user"></i>
					        </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tooltip" data-placement="bottom" title="Phone Call">
                                                <span class="btn btn-sm btn-icon btn-rounded white">
					      		<i class="fa fa-phone"></i>
					        </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tooltip" data-placement="bottom" title="Face Call">
                                                <span class="btn btn-sm btn-icon btn-rounded white">
					      		<i class="fa fa-video-camera"></i>
					        </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="scrollable hover">
                    <div class="p-3">
                        <div class="chat-list">
                            <div class="chat-item" data-class>
                                <a href="#" class="avatar w-40">
                                    <img src="http://placehold.it/32x32" alt=".">
                                </a>
                                <div class="chat-body">
                                    <div class="chat-content rounded msg">
                                        Hi John, What's up...
                                    </div>
                                    <div class="chat-content rounded msg">
                                        hmm...
                                    </div>
                                    <div class="chat-date date">
                                        1 day ago
                                    </div>
                                </div>
                            </div>
                            <div class="chat-item" data-class="alt">
                                <a href="#" class="avatar w-40">
                                    <img class="image" src="http://placehold.it/32x32" alt=".">
                                </a>
                                <div class="chat-body">
                                    <div class="chat-content rounded msg">
                                        Lorem ipsum dolor soe rooke..
                                    </div>
                                    <div class="chat-content rounded msg">
                                        Thanks Nouvelle.
                                    </div>
                                    <div class="chat-date date">
                                        6 hrs ago
                                    </div>
                                </div>
                            </div>
                            <div class="chat-item" data-class>
                                <a href="#" class="avatar w-40">
                                    <img class="image" src="http://placehold.it/32x32" alt=".">
                                </a>
                                <div class="chat-body">
                                    <div class="chat-content rounded msg">
                                        Good afternoon, buddy.
                                    </div>
                                    <div class="chat-date date">
                                        2 hrs ago
                                    </div>
                                </div>
                            </div>
                            <div class="chat-item" data-class="alt">
                                <a href="#" class="avatar w-40">
                                    <img class="image" src="http://placehold.it/32x32" alt=".">
                                </a>
                                <div class="chat-body">
                                    <div class="chat-content rounded msg">
                                        Dlor soe isep slie gosese.
                                    </div>
                                    <div class="chat-date date">
                                        1 hr ago
                                    </div>
                                </div>
                            </div>
                            <div class="chat-item" data-class>
                                <a href="#" class="avatar w-40">
                                    <img class="image" src="http://placehold.it/32x32" alt=".">
                                </a>
                                <div class="chat-body">
                                    <div class="chat-content rounded msg">
                                        Typing...
                                    </div>
                                    <div class="chat-date date">
                                        Just now
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hide">
                            <div class="chat-item" id="chat-item" data-class>
                                <a href="#" class="avatar w-40">
                                    <img class="image" src="http://placehold.it/32x32" alt=".">
                                </a>
                                <div class="chat-body">
                                    <div class="chat-content rounded msg">
                                    </div>
                                    <div class="chat-date date"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-3 white lt b-t mt-auto" id="chat-form">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Say something" id="newField">
                        <span class="input-group-append">
		            	<button class="btn white b-a no-shadow" type="button" id="newBtn">
		            		<i class="fa fa-send text-success"></i>
		            	</button>
		          	</span>
                    </div>
                </div>
                <div class="modal fade" id="profile" aria-hidden="true">
                    <div class="modal-dialog modal-right w-50 w-auto-sm white dk b-l">
                        <div class="d-flex flex-column h-100 w-100 white b-r">
                            <div class="scroll-y">
                                <div class="p-4 mt-3 d-flex flex-column align-items-center">
                                    <img src="http://placehold.it/32x32" class="w circle" alt=".">
                                    <span class="text-md mt-3 block">Pablo Nouvelle</span>
                                    <small class="text-muted">UX/UI Designer</small>
                                    <div class="block clearfix mt-3">
                                        <a href="#" class="btn btn-icon white btn-social btn-rounded">
                                            <i class="fa fa-facebook"></i>
                                            <i class="fa fa-facebook indigo"></i>
                                        </a>
                                        <a href="#" class="btn btn-icon white btn-social btn-rounded">
                                            <i class="fa fa-twitter"></i>
                                            <i class="fa fa-twitter blue"></i>
                                        </a>
                                        <a href="#" class="btn btn-icon white btn-social btn-rounded">
                                            <i class="fa fa-google-plus"></i>
                                            <i class="fa fa-google-plus red"></i>
                                        </a>
                                        <a href="#" class="btn btn-icon white btn-social btn-rounded">
                                            <i class="fa fa-linkedin"></i>
                                            <i class="fa fa-linkedin cyan"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="p-2">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link d-flex flex-row text-muted">
                                                <span>London</span>
                                                <span class="ml-auto text-sm">
					                		<i class="fa fa-fw fa-map-marker"></i>
					                	</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link d-flex flex-row text-muted">
                                                <span>123-456-789</span>
                                                <span class="ml-auto text-sm">
					                		<i class="fa fa-fw fa-phone"></i>
					                	</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link d-flex flex-row text-muted">
                                                <span>July 03</span>
                                                <span class="ml-auto text-sm">
					                		<i class="fa fa-fw fa-birthday-cake"></i>
					                	</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link d-flex flex-row text-muted">
                                                <span>Nouvelle@gmail.com</span>
                                                <span class="ml-auto text-sm">
					                		<i class="fa fa-fw fa-envelope"></i>
					                	</span>
                                            </a>
                                        </li>
                                    </ul>
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
        name: "Chat"
    }
</script>

<style scoped>

</style>
