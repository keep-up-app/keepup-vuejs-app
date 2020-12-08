<template>
	<div class="content">
        <div v-if="!Game && !error">
            <LoadingAnimation />
        </div>
        <div v-else>
            <div v-if="error" class="space-top">
                <p class="center-h">Could not load game data with appid: <strong>{{ error.game }}</strong></p>
                <button class="space-top center-h btn-inverted" @click="$router.go(-1)">Back</button>
            </div>
            <div v-else>
                <img class="noselect bg" :src="Game.background" alt="">
                {{ Game }}
            </div>
        </div>
    </div>
</template>

<script>

import LoadingAnimation from '@/components/LoadingAnimation.vue'

export default {

    name: 'GameInfo',
    components: {
        LoadingAnimation,
    },

    data() {
        return {
            error: null
        }
    },

    computed: {
        Game: function() { return this.$store.getters.Game },
    },

    created() {
        this.$store.commit('SET_GAME_INFO', null);   
    },

    mounted() {
        let appid = this.$route.params.appid;
        this.$store.dispatch('GAME_INFO', appid)
            .catch(err => this.error = { game: appid, message: err });
    },
}

</script>

<style lang="scss" scoped>
    
    @import '@/assets/style/variables.scss';

    .bg {
        position: absolute;
        top: 0;
        left: -50%;
        object-fit: cover;
        width: 80vw;
        z-index: -100;
    }
</style>