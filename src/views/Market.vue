<template>
    <div>
        <PageTitle title='Steam Games' message='see your games and game stats.'/>
        <div class="content">
            <section class="space-top">
                <h3>Showing Market Items for <strong>{{ selectedGame.name }}</strong></h3>
                <Dropdown
                    :selectedOption="selectedGame.name"
                    :choiceDescription="'Filter by Game'"
                    :requireSelected="true"
                    :options="OwnedGamesListing"
                    @onSelectionChanged="searchByGame($event)"
                />
                <div v-if="Items == null">
                    <LoadingAnimation />
                </div>
                <div v-else-if="error">
                    <p class="center-h"><strong>{{ error }}</strong></p>
                </div>
                <div v-else>
                    <div v-if="Items && Meta && Links">
                        <div class="grid-list-legend">
                            <div><p>Item</p></div>
                            <div><p>Quantity</p></div>
                            <div><p>Value</p></div>
                        </div>
                        <div v-bind:key="item.name" v-for="item in Items">
                            <MarketItemListing v-bind:item="item"/>
                        </div>
                        <div id="listing-footer">
                            <div>
                                <p id="listing-info">Showing {{ Meta.from }}-{{ Meta.to }} of {{ Meta.total }} results</p>
                            </div>
                            <div class="right" id="page-option">
                                <button :class="{ 'disabled' : !Links.prev }" @click="changePage(-1)" class="btn margin-r">Previous</button>
                                <button :class="{ 'disabled' : !Links.next }" @click="changePage(+1)" class="btn">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

import PageTitle from '@/components/PageTitle.vue';
import MarketItemListing from '@/components/MarketItemListing.vue';
import LoadingAnimation from '@/components/LoadingAnimation.vue';
import Dropdown from '@/components/Dropdown.vue'

export default {

    name: 'Market',
    components: {
        PageTitle,
        LoadingAnimation,
        MarketItemListing,
        Dropdown
    },

    data() {
        return {
            selectedGame: {
                name: 'Rust',
                appid: 252490
            },
            error: '',
            currentPage: 1,
        }
    },

    computed: {
        Items: function() { return this.$store.getters.getItemData },
        Links: function() { return this.$store.getters.getItemLinks },
        Meta: function() { return this.$store.getters.getItemMeta },
        OwnedGamesListing: function() {
            if (!this.$store.getters.User)               
                return null;
    
            const games = this.$store.getters.OwnedGames.games;
            const gamesKeyValue = []
            for (const i in games) 
                gamesKeyValue.push({ key: games[i].appid, name: games[i].name });
            return gamesKeyValue;
        }
    },

    created() {
        this.$store.commit('SET_ITEM_DATA', null);
    },

    mounted() {
        let steamid = this.$store.getters.User.steamid;
        if (steamid) this.$store.dispatch('OWNED_GAMES', steamid);
        this.$store.dispatch('ITEMS_FROM_GAME', { appid: this.selectedGame.appid, page: 1 })
            .catch(err => this.error = err);
    },

    methods: {
        changePage: function(page) {
            this.currentPage += page;
            this.$store.dispatch('ITEMS_FROM_GAME', { appid: this.selectedGame.appid, page: this.currentPage })
                .then(() => window.scrollTo(0, 0))
                .catch(err => this.error = err);
        },
        searchByGame: async function(game = '') {
            this.error = '';
            this.currentPage = 1;
            this.selectedGame = {
                name: game.name,
                appid: game.key
            };
            this.$store.commit('SET_ITEM_DATA', null);
            this.$store.dispatch('ITEMS_FROM_GAME', { appid: this.selectedGame.appid, page: this.currentPage })
                .then(() => window.scrollTo(0, 0))
                .catch(err => this.error = err);
        }
    },
}

</script>

<style lang="scss">

    @import '@/assets/style/variables.scss';
    
    .grid-list-legend {
        display: inline-grid;
        grid-template-columns: 53% 20% 17%;
        grid-gap: 2%;
        border-radius: 3px;
        width: 100%;
        margin: 25px 0;
        padding: 5px 20px;
        font-size: 14px;
        font-weight: bold;
        background: $light;
    }

    #listing-footer {
        position: relative;
        margin: 40px 0;
        height: 50px;
        width: 100%;
    }

    #listing-footer div {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    #listing-info {
        color: $dim;
    }

</style>