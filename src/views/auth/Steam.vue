<template>
    <div class="content">
        <div id="auth">
            <h1>LINK YOUR STEAM ACCOUNT</h1>
            <p class="space">Link your <strong>Steam</strong> to view your game stats, invenetory and more.</p>
            <p class="space">This is optional. You may proceed within linking your account by pressing the <strong>SKIP</strong> button</p>
            <div id="auth-form">
                <button class="btn-special large" @click="submit">Link Steam</button>
                <router-link class="btn-inverted large" to="/games">Skip</router-link>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions } from "vuex";

export default {
    name: 'Steam',

    methods: {
        ...mapActions(['linkSteam']),

        submit: async function() {

            await this.login({
                'email': this.form.email,
                'password': this.form.password
            }).catch(err => {
                this.error = err.response.data.error || "An error occured.";
            }).finally(this.submitted = false);
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