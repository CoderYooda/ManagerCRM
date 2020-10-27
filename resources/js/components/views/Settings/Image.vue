<template>
    <div>
        <div class="p-4 b-b _600">Настройки изображения</div>
        <div class="p-4 col-md-6">
            <div class="box">
                <div class="box-header">
                    <h2>Цветовая настройка приложения</h2>
                    <small>Настройте удобный для себя цветовой стиль приложения. Доступны тёмная и светлая тема</small>
                </div>
                <div class="box-divider m-0"></div>
                <div class="box-body">
                    <form>
                        <div class="form-group row">
                            <label class="col-sm-6 col-form-label">Фон контейнера</label>
                            <div class="col-sm-6">
                                <label class="md-switch p-2">
                                    <input v-model="contentIsDark" @change="setTheme()" type="checkbox" checked>
                                    <i class="blue"></i>
                                </label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-6 col-form-label">Фон меню</label>
                            <div class="col-sm-6">
                                <label class="md-switch p-2">
                                    <input v-model="asideIsDark" @change="setTheme()" type="checkbox" checked>
                                    <i class="blue"></i>
                                </label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-6 col-form-label">Фон логотипа</label>
                            <div class="col-sm-6">
                                <label class="md-switch p-2">
                                    <input v-model="logoIsDark" @change="setTheme()" type="checkbox" checked v-bind:disabled="asideIsDark">
                                    <i class="blue"></i>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="box">
                <div class="box-header">
                    <h2>Форма отображения</h2>
                    <small>Используйте полноеэкранный режим для максимального использования монитора, или компактную версию</small>
                </div>
                <div class="box-divider m-0"></div>
                <div class="box-body">
                    <form>
                        <div class="form-group row">
                            <label class="col-sm-6 col-form-label">На всю ширину</label>
                            <div class="col-sm-6">
                                <label class="md-switch p-2">
                                    <input v-model="isFullwidth" @change="setTheme()" type="checkbox" checked>
                                    <i class="blue"></i>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: ()=> {
            return {
                contentIsDark: false,
                asideIsDark: false,
                logoIsDark: false,
                isFullwidth: false,
            }
        },
        mounted(){
            this.prepareSettings();
        },
        methods: {
            setTheme(){
                this.logoIsDark = this.asideIsDark ?  true : this.logoIsDark;
                this.saveToLocalStorage('content_class', this.contentIsDark ? 'dark' : 'dark-white');
                this.saveToLocalStorage('aside_class', this.asideIsDark ? 'dark' : 'dark-white');
                this.saveToLocalStorage('logo_class', this.logoIsDark ? 'dark' : 'dark-white');
                this.saveToLocalStorage('isFullwidth', this.isFullwidth);
                this.$eventBus.$emit('themeChanged');
            },
            prepareSettings(){
                let content_class = this.getFromLocalStorage('content_class');
                let aside_class = this.getFromLocalStorage('aside_class');
                let logo_class = this.getFromLocalStorage('logo_class');
                let isFullwidth = this.getFromLocalStorage('isFullwidth');
                this.contentIsDark = content_class === 'dark';
                this.asideIsDark = aside_class === 'dark';
                this.logoIsDark = logo_class === 'dark';
                this.isFullwidth = (isFullwidth === 'true');
            }
        }
    }
</script>
