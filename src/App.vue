<template>
    <div id="app">
        <NavigationMenu/>
        <SteamNotLinkedBanner v-if="withoutSteam"/>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<script>

import SteamNotLinkedBanner from '@/components/SteamNotLinkedBanner.vue';
import NavigationMenu from '@/components/NavigationMenu.vue';

export default {
    components: {
        SteamNotLinkedBanner,
        NavigationMenu,
    },
    
    computed: {
        withoutSteam: function() {
            if (this.$store.getters.isAuthenticated)
                return !this.$store.getters.isSteamAuthenticated;
            return false;
        },
    },
}

</script>

<style lang="scss">
    @import '@/assets/style/variables.scss';
    @import '@/assets/style/font.style.scss';
    @import '@/assets/style/default.style.scss';
    @import '@/assets/style/main.style.scss';
</style>