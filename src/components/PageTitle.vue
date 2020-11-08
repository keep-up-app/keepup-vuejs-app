<template>
    <div class="noselect">
        <div id="title-container">
            <div class="center-h">
                <h1>{{ title }}</h1>
                <p><router-link id="login-link" to="/login">Login</router-link>{{ message }}</p>
            </div>
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

    #title-container div {
        width: 1000px;
    }

    h1 {
        margin-top: 25px;
        margin-bottom: 0;
    }

    p {
        opacity: 0.85;
    }
    
    #login-link {
        opacity: 1 !important;
    }

</style>