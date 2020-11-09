<template>
    <div class="content">
        <p>{{ game.name }}</p>
    </div>
</template>

<script>
export default {
    props: {
        game: {}
    },
}
</script>

<style lang="scss" scoped>

    p {
        display: inline;
    }
    
</style>