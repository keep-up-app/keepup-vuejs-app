<template>
    <div class="content">
        <div id="auth">
            <h1>SIGN IN</h1>
            <form action="">
                <input class="large" placeholder="Email" type="text">
                <input class="large" placeholder="Password" type="password">
                <button class="btn large">Sign In</button>
            </form>
            <router-link class="btn-inverted large" to="/auth/register">Register</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
    #auth {
        position: relative;
        top: 100px;
        width: 30%;
    }

    input {
        color: white;
        text-decoration: none;
        border: none;
        outline: none;
        font-size: 15px;
    }

</style>