<template>
    <div class="d-flex flex-column flex slide_up">
        <div class="navbar white no-radius box-shadow pos-rlt">
            <span class="text-md">Pablo Nouvelle</span>
            <a data-toggle="modal" data-target="#content-aside" data-modal class="ml-auto d-md-none">
                                        <span class="btn btn-sm btn-icon primary">
			      		<i class="fa fa-th"></i>
			        </span>
            </a>
        </div>
        <div class="scroll-y">
            <div class="scroll-y">
                <div class="p-4 mt-3 d-flex flex-column align-items-center">
<!--                    <img src="../assets/images/a2.jpg" class="w circle animate fadeInUp" alt=".">-->
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
                                <span class="flex">London</span>
                                <span class="text-sm">
				                		<i class="fa fa-fw fa-map-marker"></i>
				                	</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-flex flex-row text-muted">
                                <span class="flex">123-456-789</span>
                                <span class="text-sm">
				                		<i class="fa fa-fw fa-phone"></i>
				                	</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-flex flex-row text-muted">
                                <span class="flex">July 03</span>
                                <span class="text-sm">
				                		<i class="fa fa-fw fa-birthday-cake"></i>
				                	</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-flex flex-row text-muted">
                                <span class="flex">Nouvelle@gmail.com</span>
                                <span class="text-sm">
				                		<i class="fa fa-fw fa-envelope"></i>
				                	</span>
                            </a>
                        </li>
                    </ul>
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
            firstname(){return this.$attrs.user.name.first},
            lastname(){ return this.$attrs.user.name.last},
            patronymic(){return this.$attrs.user.name.patronymic}
        }
    }
</script>

<style scoped>

</style>
