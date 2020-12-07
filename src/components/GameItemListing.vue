<template>
    <div class="noselect game-item-box">
        <CaseImageNotFound class="bg-blured" :url="game.banner" />
        <div class="game-description">
            <CaseImageNotFound :url="game.logo" />
            <h1>{{ game.name }}</h1>
            <div>Recent: {{ game.playtime.recent.text }}</div>
            <div>Total: {{ game.playtime.text }}</div>
        </div>
    </div>
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
}

</script>

<style lang="scss" scoped>

    .game-item-box {
        cursor: pointer;
        position: relative;
        display: inline-block;
        margin: 10px 0;
        width: 100%;
        height: 150px;
        overflow: hidden;
        transition: all 150ms ease-out;
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
        width: 100%;
        filter: blur(10px);
    }

    .game-item-box:hover {
        height: 200px;
    }

    .game-item-box:hover > img {
        z-index: -1000;
        width: 100%;
        filter: blur(10px) contrast(110%);
    }

    h1 {
        display: inline-block;
        margin-left: 20px;
        font-family: 'Verdana';
        font-weight: bolder;
        font-size: 35px;
        margin-bottom: 10px;
    }

</style>