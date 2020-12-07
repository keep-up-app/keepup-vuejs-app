<template>
    <div class="content fade-in">
        <div id="auth">
            <h1>KEEPUP GUARD</h1>
            <p>Two factor authentication is enabled on this account.</p>
            <p>A <b>6-digit code</b> was sent to you by email, check your inbox.</p>
            <div class="message-box"><p :class="{ 'error' : error }">{{ error }}</p></div>
            <div id="auth-form" :class="{ 'disabled' : this.submitted }">
                <form @submit.prevent="submit">
                    <input type="hidden" v-model="form._id">
                    <input placeholder="6-Digit Code" type="text" v-model="form.token">
                    <button class="btn large">Authenticate</button>
                </form>
                <router-link class="btn-inverted large" to="/market">Cancel</router-link>
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
                _id: this.$route.query._id,
                token: '',
            }
        }
    },

    methods: {
        submit: function() {
            this.submitted = true;
            this.error = null;

            this.$store.dispatch('LOGIN', this.form)
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
        height: 375px;
        width: 30%;
        left: 50%;
        top: 35vh;
        transform: translate(-50%, -50%);
    }

    #auth-form {
        position: absolute;
        width: 100%;
        bottom: 0;
    }

</style>