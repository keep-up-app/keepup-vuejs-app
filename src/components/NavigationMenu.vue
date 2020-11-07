<template>
    <div class="noselect">
        <div id="navbar">
            <nav>
                <div id="main-menu">
                    <ul>
                        <li><router-link class="menu-link" to="/market">Market</router-link></li>
                        <li><router-link class="menu-link" to="/games">Games</router-link></li>
                        <li><router-link class="menu-link" to="/about">About</router-link></li>
                    </ul>
                </div>
                <div id="authentication">    
                    <ul>
                        <li><router-link class="btn" to="/auth/login">Login</router-link></li>
                        <li><router-link class="btn-inverted" to="/auth/register">Register</router-link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #navbar {
        position: fixed;
        width: 100%;
        height: 80px;
        background: rgb(27, 40, 56);
        z-index: 10000;
    }

    #main-menu {
        position: absolute;
        width: 50%;
        height: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    #navbar ul {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    #navbar li {
        display: inline;
        margin: 0 10px;
    }

    #authentication {
        position: absolute;
        height: 100%;
        right: 10%;
        top: 50%;
        transform: translateY(-50%);
    }

    .menu-link {
        font-size: 16px;
        margin: 20px 20px;
        opacity: 0.8;
        text-transform: uppercase;
        transition: 150ms;
    }

    .menu-link:hover {
        opacity: 1;
    }
</style>