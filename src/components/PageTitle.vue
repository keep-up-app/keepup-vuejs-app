<template>
    <div id="title-container">
        <div class="content">
            <h1>{{ title }}</h1>
            <div v-if="message">
                <div v-if="!isAuthed">
                    <router-link id="login-link" to="auth/login">Login</router-link><p> to {{ message }}</p>
                </div>
                <div v-else>
                    <p>Hello <strong>{{ Username }}</strong>, you can {{ message }}</p>
                </div>
            </div>
            <div v-else>
                <p>This is the {{ title }} section.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        message: String
    },

    computed: {
        isAuthed: function(){ return this.$store.getters.isAuthenticated },
        Username: function(){ return this.$store.getters.User['username'] }
    },
}
</script>

<style lang="scss" scoped>
    
    #title-container {
        width: 100%;
        height: 130px;
        background: linear-gradient(#3c8030, #489c39);
    }

    h1 {
        margin-top: 30px;
        margin-bottom: 0;
    }

    p {
        opacity: 0.75;
        display: inline;
    }
    
    #login-link {
        text-decoration: underline;
    }

</style>