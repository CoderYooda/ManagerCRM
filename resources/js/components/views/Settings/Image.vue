<template>
    <div>
        <div class="p-4 b-b _600">Настройки изображения</div>
        <form role="form" class="p-4 col-md-6">
            <div class="form-group row">
                <label class="col-sm-6 col-form-label">Фон контейнера</label>
                <div class="col-sm-6">
                    <label class="radio radio-inline m-0 mr-1 ui-check">
                        <input v-model="contentIsDark" @change="setContent(this)" type="radio" name="brand" v-bind:value="false">
                        <i class="light"></i>
                    </label>
                    <label class="radio radio-inline m-0 mr-1 ui-check ui-check-color">
                        <input v-model="contentIsDark" @change="setContent(this)" type="radio" name="brand" v-bind:value="true">
                        <i class="dark"></i>
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
            setContent(elem){
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
