<template>
    <div class="content">
        <div id="auth">
            <h1>LINK YOUR STEAM ACCOUNT</h1>
            <p class="space">Link your <strong>Steam</strong> to view your game stats, invenetory and more.</p>
            <p class="space">This is optional. You may proceed without linking your account by pressing <strong>SKIP</strong>.</p>
            <div class="message-box"><p :class="{ 'error' : error }">{{ error }}</p></div>
            <div id="auth-form">
                <form action="https://steamcommunity.com/openid/login" method="POST">
                    <input type="hidden" name="openid.identity" value="http://specs.openid.net/auth/2.0/identifier_select" />
                    <input type="hidden" name="openid.claimed_id" value="http://specs.openid.net/auth/2.0/identifier_select" />
                    <input type="hidden" name="openid.ns" value="http://specs.openid.net/auth/2.0" />
                    <input type="hidden" name="openid.mode" value="checkid_setup" />
                    <input type="hidden" name="openid.realm" :value="getLink()" />
                    <input type="hidden" name="openid.return_to" :value="getLink()" />
                    <button class="btn-special large" type="submit">Link Steam</button>
                </form>
                <router-link class="btn-inverted large" to="/games">Skip</router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Steam',
    data() {
        return {
            error: null,
        }
    },

    mounted() {
        let dataUrl = this.$route.query['openid.claimed_id'];
        if (dataUrl) {
            let steamid = dataUrl.substring(dataUrl.lastIndexOf('/') + 1);
            if (steamid) this.$store.dispatch('UPDATE', { 'steamid': steamid })
                .then(() => this.$router.push('/account'))
                .catch(err => { this.error = err.response ? err.response.data.error : err; })
        }
    },

    methods: {
        getLink: function() { return window.location.origin + this.$route.fullPath }
    },
}

</script>

<style lang="scss" scoped>
    
    #auth {
        position: relative;
        top: 100px;
        height: 475px;
        width: 30%;
    }

    #auth-form {
        position: absolute;
        width: 100%;
        bottom: 0;
    }

</style>