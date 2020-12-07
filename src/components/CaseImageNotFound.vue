<template>
    <img :src="url" @error="setAltImg">
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