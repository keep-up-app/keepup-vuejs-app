<template>
    <div class="content">
        <div id="auth">
            <h1>LOGIN</h1>
            <p class="space">Login with your <strong>email</strong> tp see what's new.</p>
            <p class="message-box"></p>
            <div id="auth-form" :class="{ 'disabled' : submitted }">
                <form action="">
                    <input placeholder="Email" type="text">
                    <input class="space" placeholder="Password" type="password">
                    <button class="btn large">Sign In</button>
                </form>
                <router-link class="btn-inverted large" to="/auth/register">Register</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
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