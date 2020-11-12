<template>
    <div class="app-page canva">
<!--        <svg id="canvas" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%">-->
<!--            <path d="M300 300 C 300 300, 300 500, 300 500" stroke="rgb(111 212 0)" stroke-width="2" fill="transparent" id="1"></path>-->
<!--        </svg>-->
    </div>
</template>

<script>
    import {Canva, Path} from "../../Classes/Canva"
    export default {
        created(){

        },
        mounted() {
            this.$eventBus.$emit('set-title', 'Создание скрипта');

            let canva = new Canva({
                container: 'canva',
            });

            let path = new Path({
                start: [300,300, 90],
                end: [300,500, 90],
            });
            canva.addElem(path);




            document.getElementsByClassName('canva')[0].addEventListener('mousemove', (e) => {
                path.fresh([300,300, 90], [e.offsetX, e.offsetY, 90]);
            })
        },
        methods: {

        }
    }
</script>
