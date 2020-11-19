<template>
    <div id="app">
        <NavigationMenu/>
        <SteamNotLinkedBanner v-if="withoutSteam"/>
        <div v-if="showEditForm"><EditKeepupProfile v-bind:user="User" /></div>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<script>

import SteamNotLinkedBanner from '@/components/SteamNotLinkedBanner.vue';
import NavigationMenu from '@/components/NavigationMenu.vue';
import EditKeepupProfile from '@/components/EditKeepupProfile.vue';

export default {
    components: {
        SteamNotLinkedBanner,
        EditKeepupProfile,
        NavigationMenu,
    },
    
    computed: {
        withoutSteam: function() {
            if (this.$store.getters.isAuthenticated)
                return !this.$store.getters.isSteamAuthenticated;
            return false;
        },
        showEditForm: function() { return this.$store.getters.showEditForm },
        User: function() { return this.$store.getters.User },
    },
}

</script>

<style lang="scss">
    @import '@/assets/style/variables.scss';
    @import '@/assets/style/font.style.scss';
    @import '@/assets/style/default.style.scss';
    @import '@/assets/style/main.style.scss';
</style>