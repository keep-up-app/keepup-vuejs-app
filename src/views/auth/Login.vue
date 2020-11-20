<template>
    <div class="content">
        <div id="auth">
            <h1>LOGIN</h1>
            <p>Login with your <strong>Email</strong> to see what's new.</p>
            <div class="message-box"><p :class="{ 'error' : error }">{{ error }}</p></div>
            <div id="auth-form" :class="{ 'disabled' : this.submitted }">
                <form @submit.prevent="submit">
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

export default {
    name: 'Login',

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
        submit: function() {
            this.submitted = true;
            this.error = null;

            this.$store.dispatch('LOGIN', {
                'email': this.form.email,
                'password': this.form.password
            })
            .then(() => { this.$router.push('/') })
            .catch(err => { this.error = err.response ? err.response.data.error : err })
            .finally(() => { this.submitted = false })
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