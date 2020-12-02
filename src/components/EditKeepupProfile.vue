<template>
    <div id="overlay">
        <div id="form-container">
            <div id="edit-form">
                <h3>Edit Account</h3>
                <div class="message-box">
                    <div v-if="error"><p class="error">{{ error }}</p></div>
                    <div v-if="success"><p class="success">{{ success }}</p></div>
                </div>
                <div :class="{ 'disabled' : this.submitted }">
                    <form @submit.prevent="submit">
                        <p>Username:</p>
                        <input type="text" v-model="form.username" placeholder="Username">
                        <p>Email:</p>
                        <input type="text" v-model="form.email" placeholder="Email">
                        <p>Choose Password:</p>
                        <input type="password" v-model="form.choosePassword" placeholder="Choose Password">
                        <p>Repeat Password:</p>
                        <input type="password" v-model="form.repeatPassword" placeholder="Repeat Password">
                        <div class="vignet-box">
                            <input class="checkbox" type="checkbox" id="2fa" v-model="form.auth.enabled">
                            <label for="2fa">Enable <strong>Two Factor Authentification</strong></label>
                        </div>
                        <ul class="space-top">
                            <li><button type="submit" class="margin-r btn">Save</button></li>
                            <li><button @click="closeForm" class="margin-r btn-inverted">Cancel</button></li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        user: null
    },

    data() {
        return {
            error: null,
            success: null,
            submitted: false,
            form: {
                email: this.$props.user.email,
                username: this.$props.user.username,
                choosePassword: '',
                repeatPassword: '',
                auth: {
                    enabled:  this.$props.user.auth.enabled
                }
            }
        }
    },

    methods: {
        closeForm: function() { this.$store.dispatch('TOGGLE_EDIT_FORM') },

        submit: function() {
            this.error = null;
            this.success = null;
            this.submitted = true;

            this.$store.dispatch('UPDATE', {
                'email': this.form.email,
                'username': this.form.username,
                'password': {
                    'first': this.form.choosePassword,
                    'second': this.form.repeatPassword
                },
                'auth': {
                    'enabled': this.form.auth.enabled
                }
            })
            .then(() => { 
                this.success = "Account information updated!";
                setTimeout(() => this.closeForm(), 500); 
            })
            .catch(err => { this.error = err.response ? err.response.data.error : err })
            .finally(() => { this.submitted = false });
        }
    },
}

</script>

<style lang="scss" scoped>

    @import '@/assets/style/variables.scss';

    #overlay {
        position: fixed;
        z-index: 1000;
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        background: rgba($color: #000000, $alpha: 0.75);
    }

    #form-container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        height: auto;
        background: $dark;
        border-radius: 7.5px;
    }

    #edit-form {
        margin: 40px;
    }

    p {
        margin-bottom: 5px;
    }

</style>