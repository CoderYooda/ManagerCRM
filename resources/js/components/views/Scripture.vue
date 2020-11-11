<template>
    <div class="app-page">
        <svg id="canvas" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%">
        </svg>
    </div>
</template>

<script>
    import Path from "../../Classes/Path"
    export default {
        created(){

        },
        mounted() {
            this.$eventBus.$emit('set-title', 'Создание скрипта');


            let path = new Path({
                id: 1,
                svg: 'canvas',
                start: [[300,300], [300,500]],
                end: [[300,300], [300,500]],
            });
            document.getElementById('canvas').addEventListener('mousemove', (e) => {
                path.fresh([[300,300], [300,500]], [[e.offsetX - 50, e.offsetY], [e.offsetX + 50, e.offsetY]]);
            })
        },
        methods: {

        }
    }
</script>
