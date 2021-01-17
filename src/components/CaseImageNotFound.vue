<template>
    <img :src="url" @error="setAltImg" alt="Not Found...">
</template>

<script>
export default {
    name: "CaseImageNotFound",
    props: {
        url: String
    },
    methods: {
        setAltImg(event) { 
            event.target.src = require("@/assets/images/no-image.png");
        } 
    }
}
</script>