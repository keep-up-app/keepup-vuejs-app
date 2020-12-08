<template>
    <div class="item-select grid">
        <div>
            <div class="icon-container">
                <CaseImageNotFound class="noselect item-thumbnail" :url="item.item_icon" />
            </div>
        </div>
        <div>
            <h3 class="item-name">{{ item.name }}</h3>
            <CaseImageNotFound class="game-icon noselect margin-r" :url="item.app_icon" /> 
            <p class="game-name">{{ item.app_name }}</p>
        </div>
        <div>
            <div class="grid-center-content">
                <p><strong>{{ item.volume }}</strong></p>
            </div>
        </div>
        <div>
            <div class="grid-center-content">
                <p class="price-tag"><strong>{{ item.pricing.text }}</strong></p>
            </div>
        </div>
    </div>
</template>

<script>

import CaseImageNotFound from '@/components/CaseImageNotFound.vue';

export default {
    components: {
        CaseImageNotFound
    },
    props: {
        item: {}
    },
}
</script>

<style lang="scss" scoped>

    @import '@/assets/style/variables.scss';

    .grid {
        display: grid;
		grid-template-columns: 10% 44% 20% 20%;
		grid-gap: 2%;
        width: 100%;
        background: $light;
        padding: 15px;
        margin-bottom: 15px;
        border-radius: 5px;
        cursor: pointer;
    }

    .grid-center-content {
        position: relative;
        top: 50%;
        transform: translateY(-50%);        
    }

    .grid:hover {
        background: rgba($light, $alpha: 0.75);
        transition: all 150ms ease-out;
    }

    .icon-container {
        background: rgb(60, 60, 60);
        outline: white solid 1px;
	}

    .item-thumbnail {
        padding: 10%;
        width: 100%;
        height: 100%;
    }

    .item-name {
        color: gold;
    }

    .game-name {
        font-size: 16px;
        color: $dim;
        vertical-align: 25%;
    }

    .game-icon {
        width: auto;
        height: 25px;
    }

    .price-tag {
        font-size: 16px;
    }

</style>