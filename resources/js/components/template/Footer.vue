<template>
    <div class="content-footer white " id="content-footer">
        <div class="d-flex p-3">
            <span class="text-sm text-muted flex">&copy; Copyright. Flatfull</span>
            <div class="text-sm text-muted">Версия {{ app_version }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data: ()=> {
            return {
                app_version: window.app_version,
            }
        },
        name: "Footer"
    }
</script>
