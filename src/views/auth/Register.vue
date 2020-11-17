<template>
    <div class="content">
        <div id="auth">
            <h1>REGISTER</h1>
            <p class="space">Sign up at <strong>KeepUp</strong> to see your Steam inventory's true value.</p>
            <div class="message-box"><p :class="{ 'error' : error }">{{ error }}</p></div>
            <div id="auth-form" :class="{ 'disabled' : submitted }">
                <form @submit.prevent="submit">
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

import { mapActions } from 'vuex';

export default {
    name: 'Register',

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
        ...mapActions(['REGISTER']),

        submit: function() {
            this.submitted = true;
            this.error = null;

            this.REGISTER({
                'email': this.form.email,
                'password': {
                    'first': this.form.choosePassword,
                    'second': this.form.repeatPassword
                }
            })
            .then(success => { this.$router.push('/'); console.log(success) })
            .catch(err => { this.error = err.response ? err.response.data.error : "An error occured."; })
            .finally(this.submitted = false);
        },
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