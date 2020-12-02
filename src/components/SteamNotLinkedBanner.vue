<template>
    <div id="banner">
        <div class="content">
            <div id="banner-content">
                <p>Connect your Steam account with <strong>KeepUp</strong>.</p>
                <router-link class="btn-special right" to="/auth/steam">Link Steam</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SteamNotLinkedBanner",
}
</script>

<style lang="scss" scoped>
    
    @import '@/assets/style/variables.scss';

    #banner {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 60px;
        background: $darker;
    }

    #banner-content {
        transform: translateY(50%);
        width: 100%;
    }

    #banner-content p {
        margin-top: 3px;
    }

</style>