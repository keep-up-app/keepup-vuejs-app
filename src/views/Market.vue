<template>
    <div>
        <PageTitle title='Steam Games' message='see your games and game stats.'/>
        <div class="content">
            <section class="space-top">
                <div v-if="Items == null">
                    <LoadingAnimation />
                </div>
                <div v-else>
                    <div id="main-listing">
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
                                <button :class="{ 'disabled' : !Links.prev }" @click="changePage(Meta.current_page - 1)" class="btn margin-r">Previous</button>
                                <button :class="{ 'disabled' : !Links.next }" @click="changePage(Meta.current_page + 1)" class="btn">Next</button>
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

export default {

    name: 'Market',
    components: {
        PageTitle,
        LoadingAnimation,
        MarketItemListing
    },

    computed: {
        Items: function() { return this.$store.getters.getItemData },
        Links: function() { return this.$store.getters.getItemLinks },
        Meta: function() { return this.$store.getters.getItemMeta },
    },

    created() {
        this.$store.commit('SET_ITEM_DATA', null);
    },

    mounted() {
        this.$store.dispatch('ITEMS_FROM_GAME', 252490);
    },

    methods: {
        changePage: function(page) {
            console.log(page)
            this.$store.dispatch('ITEMS_FROM_GAME', 252490, page);
        },
    },
}

</script>

<style lang="scss">

    @import '@/assets/style/variables.scss';
    
    .grid-list-legend {
        display: inline-grid;
        grid-template-columns: 56% 20% 20%;
        grid-gap: 2%;
        border-radius: 5px;
        width: 100%;
        margin: 25px 0;
        padding: 5px 20px;
        font-size: 14px;
        font-weight: bold;
        background: $light;
    }

    #main-listing {
        margin: 50px 0;
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