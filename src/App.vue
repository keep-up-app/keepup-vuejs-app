<template>
    <div id="app">
        <NavigationMenu/>
        <main>
            <router-view/>
        </main>
        <Footer/>
    </div>
</template>

<script>

import NavigationMenu from '@/components/NavigationMenu.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
        NavigationMenu,
        Footer
    }
}

</script>

<style lang="scss">
    @import '@/assets/style/variable.scss';
    @import '@/assets/style/font.style.scss';
    @import '@/assets/style/default.style.scss';
    @import '@/assets/style/main.style.scss';
</style>