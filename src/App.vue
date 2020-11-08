<template>
    <div id="app">
        <NavigationMenu/>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<script>

import NavigationMenu from '@/components/NavigationMenu.vue'

export default {
    components: {
        NavigationMenu
    }
}

</script>

<style lang="scss">
    @import '@/assets/style/variable.scss';
    @import '@/assets/style/font.style.scss';
    @import '@/assets/style/default.style.scss';
    @import '@/assets/style/main.style.scss';
</style>