<template>
    <div id="box">
       <BasicErrorBox message="Page Not Found" code="404" /> 
    </div>
</template>

<script>

import BasicErrorBox from '@/components/error/BasicErrorBox.vue'

export default {
    name: '404',
    components: {
        BasicErrorBox
    }    
}
</script>

<style lang="scss" scoped>

    #box {
        top: 50;
        left: 50;
        transform: translate(-50%, -50%);
    }
    
</style>