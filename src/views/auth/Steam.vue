<template>
    <div class="content">
        <div id="auth">
            <h1>LINK YOUR STEAM ACCOUNT</h1>
            <p class="space">Link your <strong>Steam</strong> to view your game stats, invenetory and more.</p>
            <p class="space">This is optional. You may proceed within linking your account by pressing the <strong>SKIP</strong> button</p>
            <div id="auth-form">
                <form action="https://steamcommunity.com/openid/login" method="POST">
                    <input type="hidden" name="openid.identity" value="http://specs.openid.net/auth/2.0/identifier_select" />
                    <input type="hidden" name="openid.claimed_id" value="http://specs.openid.net/auth/2.0/identifier_select" />
                    <input type="hidden" name="openid.ns" value="http://specs.openid.net/auth/2.0" />
                    <input type="hidden" name="openid.mode" value="checkid_setup" />
                    <input type="hidden" name="openid.realm" value="https://keepup-vuejs-app.herokuapp.com/auth/steam"/>
                    <input type="hidden" name="openid.return_to" value="https://keepup-vuejs-app.herokuapp.com/account" />
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

    mounted() {
        let dataUrl = this.$route.query['openid.claimed_id'];
        if (dataUrl) {
            let steamid = dataUrl.substring(dataUrl.lastIndexOf('/') + 1);
            if (steamid) this.$store.dispatch('LINK_STEAM', steamid).then(success => { this.$router.push('/account'); console.log(success) });
        }
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