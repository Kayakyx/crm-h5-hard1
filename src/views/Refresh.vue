<template>
    <div class="refresh">断网用来刷新的翘板，不会出现在用户界面</div>
</template>

<script>
    export default {
        name: "Refresh",
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$router.replace(from.fullPath)
            })
        }
    }
</script>

<style scoped>

</style>