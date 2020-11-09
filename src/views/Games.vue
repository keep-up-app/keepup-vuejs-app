<template>
    <div>
        <PageTitle title='Steam Game' message=' to see yout games and game stats.'/>
        <LoadingAnimation v-if="loading" />
        <div v-bind:key="game.appid" v-for="game in games">
            <GameItemListing v-bind:game="game" />
        </div>
    </div>
</template>

<script>

import PageTitle from '@/components/PageTitle.vue'
import GameItemListing from '@/components/GameItemListing.vue'
import LoadingAnimation from '@/components/LoadingAnimation.vue'
import axios from 'axios';

export default {
    name: 'Games',
    components: {
        PageTitle,
        GameItemListing,
        LoadingAnimation
    },

    data() {
        return {
            games: [],
            loading: true
        }
    },

    mounted() {
        setTimeout(() => {
            var steamid = '76561198272843849';
            const proxyurl = "https://cors-anywhere.herokuapp.com/";

            axios.get(proxyurl + `https://game-api-endpoint.herokuapp.com/game/owned/${steamid}`)
                .then(res => {
                    this.games = res.data.games
                    this.loading = false;
                })
                .catch(err => console.error(err));    
        }, 3000);
    },
}

</script>