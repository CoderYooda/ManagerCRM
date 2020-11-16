<template>
    <div class="app-page canva">
<!--        <svg id="canvas" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%">-->
<!--            <path d="M300 300 C 300 300, 300 500, 300 500" stroke="rgb(111 212 0)" stroke-width="2" fill="transparent" id="1"></path>-->
<!--        </svg>-->
    </div>
</template>

<script>
    import {Canva, Path, TextBlock} from "../../Classes/Canva/Canva"
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

            let path2 = new Path({
                start: [10,10, 90],
                end: [50,50, 90],
            });

            let path3 = new Path({
                start: [10,10, 90],
                end: [800,800, 90],
            });

            let block = new TextBlock({
                position: [300,300],
                canva: canva,
                text: 'Тестовый блок',
            });
            let block2 = new TextBlock({
                position: [600,600],
                canva: canva,
                text: 'Тестовый блок',
            });

            canva.addElem(path);
            canva.addElem(path2);
            canva.addElem(path3);
            canva.addElem(block);
            canva.addElem(block2);



            path.attach(block, 'start');
            path3.attach(block, 'start');
            path.attach(block2, 'end');
            path2.attach(block, 'start');

            document.getElementsByClassName('canva')[0].addEventListener('mousemove', (e) => {
                // path.freshStart([300,300, 90]);
                //path.freshEnd([e.offsetX, e.offsetY, 90]);
            })
        },
        methods: {

        }
    }
</script>
