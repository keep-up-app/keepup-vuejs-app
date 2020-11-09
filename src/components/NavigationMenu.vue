<template>
    <div class="noselect">
        <div id="nav-container">
            <nav class="center-h">
                <router-link to="/market"><img id="logo" src="@/assets/logo.png"/></router-link>
                <div class="center-v" id="menu">
                    <ul>
                        <li><router-link class="menu-link graceful" to="/market">Market</router-link></li>
                        <li><router-link class="menu-link graceful" to="/games">Games</router-link></li>
                        <li><router-link class="menu-link graceful" to="/about">About</router-link></li>
                    </ul>
                </div>
                <div class="center-v right" id="auth">
                    <ul>
                        <li><router-link class="btn" to="/auth/login">Sign In</router-link></li>
                        <li><router-link class="btn-inverted" to="/auth/register">Register</router-link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>

export default {
    
    created () {
        window.addEventListener('scroll', this.scrollChange);
    },
    
    destroyed () {
        window.removeEventListener('scroll', this.scrollChange);
    },
    
    methods: {
        scrollChange () {
            //var navMenu = document.getElementById('nav-container');
        }
    }
}

</script>

<style lang="scss" scoped>
  
    $dark: #1b2838;
    $darker: #171a21;
    
    #nav-container {
        position: fixed;
        width: 100%;
        height: 100px;
        background: $darker;
        z-index: 10000;
    }

    nav {
        width: 1000px;
        height: 100%;
    }

    li {
        display: inline;
        margin: 0 5px;
    }

    #logo {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: auto;
        height: 40%;
        opacity: 0.75;
    }

    #menu {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
    }

</style>