<template>
    <div>
        <PageTitle title='Steam Games' message='see your games and game stats.'/>
        <div class="content">
            <section class="space-top">
                <div v-if="OwnedGames == null">
                    <LoadingAnimation />
                </div>
                <div v-else>
                    <div v-bind:key="game.appid" v-for="game in OwnedGames.games">
                        <GameItemListing v-bind:game="game" />
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

import PageTitle from '@/components/PageTitle.vue'
import GameItemListing from '@/components/GameItemListing.vue'
import LoadingAnimation from '@/components/LoadingAnimation.vue'

export default {

    name: 'Games',
    components: {
        PageTitle,
        GameItemListing,
        LoadingAnimation
    },

    computed: {
        OwnedGames: function() { return this.$store.getters.OwnedGames }
    },

    created() {
        this.$store.commit('SET_OWNED_GAMES', null);   
    },

    mounted() {
        let steamid = this.$store.getters.User.steamid;
        if (steamid) this.$store.dispatch('OWNED_GAMES', steamid);
    },
}

</script>