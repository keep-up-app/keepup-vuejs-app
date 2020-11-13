<template>
    <div class="content">
        <div id="auth">
            <h1>LOGIN</h1>
            <p class="space">Login with your <strong>email</strong> to see what's new.</p>
            <div class="message-box"><p :class="{ 'error' : error }">{{ error }}</p></div>
            <div id="auth-form" :class="{ 'disabled' : submitted }">
                <form @submit.prevent="login">
                    <input placeholder="Email" type="text" v-model="form.email">
                    <input class="space" placeholder="Password" type="password" v-model="form.password">
                    <button class="btn large">Sign In</button>
                </form>
                <router-link class="btn-inverted large" to="/auth/register">Register</router-link>
            </div>
        </div>
    </div>
</template>

<script>

import Axios from 'axios';

export default {
    data() {
        return {
            submitted: false,
            error: null,
            form: {
                email: '',
                password: '',
            }
        }
    },

    methods: {
        login: async function() {
            this.submitted = true;
            this.error = null;

            const proxyurl = 'https://cors-anywhere.herokuapp.com/';
            Axios.post(proxyurl + 'https://login-api-endpoint.herokuapp.com', {
                email: this.form.email,
                password: this.form.password})
            .catch(err => {
                this.error = err.response.data.error
                    ? err.response.data.error
                    : "Server Error 500..."
            }).finally(() => this.submitted = false);
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
        bottom: 0;
    }

</style>