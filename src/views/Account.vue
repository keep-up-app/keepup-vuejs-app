<template>
    <div class="content">
        <section>
            <h2>My Profile</h2>
            <section v-if="SteamProfile != null">
                <h3>{{ SteamProfile }}</h3>
                <img v-bind:src="SteamProfile.avatar.large" alt="">
            </section>
        </section>
    </div>
</template>

<script>

export default {
    name: 'Account',

    computed: {
        User: function() { return this.$store.getters.User },
        SteamProfile: function() { return this.$store.getters.SteamProfile }
    },
}

</script>

<style lang="scss" scoped>

</style>