<template>
    <div class="content">
        <div id="auth">
            <h1>REGISTER</h1>
            <p class="space">Sign up at KeepUp to see your Steam inventory's true value.</p>
            <div class="message-box"><p :class="{ 'error' : error }">{{ error }}</p></div>
            <div id="auth-form" :class="{ 'disabled' : submitted }">
                <form @submit.prevent="register">
                    <input placeholder="Email" type="text" v-model="form.email">
                    <input placeholder="Choose Password" type="password" v-model="form.choosePassword">
                    <input class="space" placeholder="Repeat Password" type="password" v-model="form.repeatPassword">
                    <button class="btn large" type="submit">Register</button>
                </form>
                <router-link class="btn-inverted large" to="/auth/login">Sign in</router-link>
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
                choosePassword: '',
                repeatPassword: ''
            }
        }
    },

    methods: {
        register: async function() {
            this.submitted = true;
            this.error = null;

            const proxyurl = 'https://cors-anywhere.herokuapp.com/';
            Axios.post(proxyurl + 'https://user-api-endpoint.herokuapp.com/user/create', {
                email: this.form.email,
                password: {
                    first: this.form.choosePassword,
                    second: this.form.repeatPassword
                }})
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