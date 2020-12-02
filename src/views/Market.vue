<template>
    <div>
        <PageTitle title='Steam Games' message='see your games and game stats.'/>
        <div class="content">
            <section class="space-top">
                <div v-if="Items == null">
                    <LoadingAnimation />
                </div>
                <div v-else>
                    <div v-bind:key="item.name" v-for="item in Items">
                        item
                    </div>
                    <button @click="changePage(-1)" class="btn">Previous</button>
                    <button @click="changePage(1)" class="btn">Next</button>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

import PageTitle from '@/components/PageTitle.vue'
import LoadingAnimation from '@/components/LoadingAnimation.vue'

export default {

    name: 'Market',
    components: {
        PageTitle,
        LoadingAnimation
    },

    computed: {
        Items: function() { return this.$store.getters.getData },
        Links: function() { return this.$store.getters.getLinks },
        Meta: function() { return this.$store.getters.getMeta },
    },

    created() {
        this.$store.commit('SET_DATA', null);
    },

    mounted() {
        this.$store.dispatch('ITEMS_FROM_GAMES', 252490);
    },

    methods: {
        changePage: function(page) {
            let newPage = parseInt(this.$route.query.page) || 1 + page;
            console.log(newPage);
            this.$router.push(this.$route.fullPath + '?page=' + parseInt(this.$route.query.page));
        },
    },
}

</script>