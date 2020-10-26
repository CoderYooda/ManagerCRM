<template>
    <div>
        <div class="p-4 b-b _600">Настройки изображения</div>
        <form role="form" class="p-4 col-md-6">
            <div class="form-group row">
                <label class="col-sm-6 col-form-label">Фон контейнера</label>
                <div class="col-sm-6">
                    <label class="ui-switch dark mt-2 mr-2">
                        <input v-model="contentIsDark" @change="setContent()" type="checkbox" checked="">
                        <i></i>
                    </label>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: ()=> {
            return {
                contentIsDark: false
            }
        },
        mounted(){
            this.prepareSettings();
        },
        methods: {
            setContent(){
                this.saveToLocalStorage('content_class', this.contentIsDark ? 'dark' : 'white');
                this.$eventBus.$emit('contentClassChanged');
            },
            prepareSettings(){
                let content_class = this.getFromLocalStorage('content_class');
                console.log(content_class);
                this.contentIsDark = content_class === 'dark';
            }
        }
    }
</script>
