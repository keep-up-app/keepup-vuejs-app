<template>
    <footer>
        <section id="footer-container" class="content">
            <div class="center-h" id="site-links">
                <router-link to="/market">Market</router-link> |  
                <router-link to="/games">Games</router-link> | 
                <router-link to="/about">About</router-link>
            </div>
        </section>
    </footer>
</template>

<style lang="scss" scoped>
    #site-links {
        font-size: 8px;
        opacity: 0.75;
    }
</style>