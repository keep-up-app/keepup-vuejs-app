<template>
    <div id="title-container">
        <div class="content">
            <h1>{{ title }}</h1>
            <router-link id="login-link" to="auth/login">Login</router-link><p>{{ message }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        message: String
    }
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