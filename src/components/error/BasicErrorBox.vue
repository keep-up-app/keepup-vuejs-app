<template>
    <div id="error-box">
        <p id="code">{{ code }}</p>
        <p id="message">{{ message }}</p>
    </div>
</template>

<script>

export default {
    props: {
        message: String,
        code: String
    }
}

</script>

<style lang="scss" scoped>

    @import '@/assets/style/variables.scss';
    
    #error-box {
        position: absolute;
        background: $light;
        left: 50%;
        top: 50%;
        width: 50%;
        height: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
    }

</style>