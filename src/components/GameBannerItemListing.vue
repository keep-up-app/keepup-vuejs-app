<template>
    <router-link :to="gamePageLink" class="noselect item-select game-item-box">
        <CaseImageNotFound class="bg-blured" :url="game.banner" />
        <div class="game-description">
            <CaseImageNotFound :url="game.logo" />
            <h1>{{ game.name }}</h1>
            <div>Recent: {{ game.playtime.recent.text }}</div>
            <div>Total: {{ game.playtime.text }}</div>
        </div>
    </router-link>
</template>

<script>

import CaseImageNotFound from '@/components/CaseImageNotFound.vue';

export default {
    components: {
        CaseImageNotFound
    },
    props: {
        game: {}
    },
    computed: {
        gamePageLink: function() { return '/games/' + this.$props.game.appid; }
    }
}

</script>

<style lang="scss" scoped>

    @import '@/assets/style/variables.scss';

    .game-item-box {
        cursor: pointer;
        position: relative;
        display: inline-block;
        margin: 10px 0;
        width: 200px;
        height: 300px;
        overflow: hidden;
        border-radius: 7.5px;
    }

    .game-description {
        width: 100%;
        height: auto;
        position: absolute;
        margin: 20px 20px;
        bottom: 0;
    }

    .game-description > div {
        margin: 10px 0;
    }

    .bg-blured {
        z-index: -1000;
        height: 100%;
        filter: blur(5px);
    }

    .game-item-box:hover > img {
        z-index: -1000;
        filter: blur(5px);
    }

    h1 {
        display: inline-block;
        margin-left: 20px;
        font-family: 'Verdana';
        font-weight: bolder;
        font-size: 20px;
        margin-bottom: 10px;
    }

</style>