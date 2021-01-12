<template>
    <div>
        <img v-if="Game" class="noselect bg" :src="Game.background" alt="">
        <div class="content">
            <div v-if="!Game && !error">
                <LoadingAnimation />
            </div>
            <div v-else id="info-container">
                <div v-if="error" class="space-top">
                    <p class="center-h">Could not load game data with appid: <strong>{{ error.game }}</strong></p>
                    <button class="space-top center-h btn-inverted" @click="$router.go(-1)">Back</button>
                </div>
                <div v-else>
                    <section class="space-top">
                        <h2>{{ Game.name.toUpperCase() }}</h2>
                        <p id="price-tag" class="right"><strong>{{ Game.price_text }}</strong></p>
                        <p>Developed & Published by: <strong>{{ getPublisherList(Game.publishers) }}</strong></p>
                        <div class="small-space"><a class=" simple-link link" target="blank" :href="'https://store.steampowered.com/app/' + Game.appid">View Steam Page ↗</a></div>
                        <hr>
                        <img id="banner" :src="Game.banner">
                        <p class="game-description">{{ Game.description.replace('amp;', '&') }}</p>
                        <hr>
                        <h3>Avaialbe on theses platforms: </h3>
                        <img class="icon-os" v-if="Game.platforms.mac" src="@/assets/images/icons/os/mac.png" alt="mac">
                        <img class="icon-os" v-if="Game.platforms.linux" src="@/assets/images/icons/os/linux.png" alt="linux">
                        <img class="icon-os" v-if="Game.platforms.windows" src="@/assets/images/icons/os/windows.png" alt="windows">
                    </section>
                </div>
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
    
    methods: {
        getPublisherList: function(publishers = []) { 
            var publisherList = "";
            for (const index in publishers)
                publisherList += publishers[index] + ", ";
            return publishers.length > 0 
                ? publisherList.replace(/,\s*$/, "") 
                : "Unknown";
        }
    },
}

</script>

<style lang="scss" scoped>
    
    @import '@/assets/style/variables.scss';

    #info-container {
        position: relative;
        margin-top: 100px;
    }

    #banner {
        width: 100%;
        height: auto;
        margin: 30px 0;
    }

    .bg {
        position: fixed;
        top: 0;
        left: 0;
        object-fit: cover;
        height: 100vh;
        z-index: -100;
    }

    .game-description {
        margin-bottom: 10px;
        font-size: 18px;
    }

    .icon-os {
        margin: 10px 5px;
        height: 25px;
        filter: invert(1);
    }

    #price-tag {
        font-size: 18px;
    }

</style>