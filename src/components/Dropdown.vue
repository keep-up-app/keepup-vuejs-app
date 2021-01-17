<template>
    <div class="dropdown" @click="shouldToggleDropdown()">
        <div class="label-container" :class="{ 'active': isExpanded }">
            <p class="text" :class="{ 'error' : requireSelected && !selected }">{{ selected ? selected : noneSelectedText }}</p>
            <div :class="{ 'down-arrow': !isExpanded, 'up-arrow': isExpanded }"></div>
		</div>
		<div class="options" :class="{ 'hide': !isExpanded }">
            <div class="option-spacer">
                <div class="spacer-text">{{ choiceDescription }}</div>
            </div>
            <div v-if="canHaveNoneMessage" class="option" @click="setCurrentSelectedOption(null)">
                <p>{{ canHaveNoneMessage }}</p>
            </div>
			<div class="option" v-for="option in options" :key="option.key" @click="setCurrentSelectedOption(option)">
                <p>{{ option.name }}</p>
            </div>
		</div>

	</div>
</template>

<script>

    export default {
        emits: ['onSelectionChanged'],
        data() {
            return {
                isExpanded: false,
                selected: '',
            }
        },
        props: {
            selectedOption: String,
            choiceDescription: String,
            noneSelectedText: String,
            requireSelected: Boolean,
            canHaveNoneMessage: String,
            options: Array
        },
        created() {
            this.selected = this.selectedOption;
        },
        methods: {
            setCurrentSelectedOption: function(option) {
                this.$emit('onSelectionChanged', option);
                this.selected = option ? option.name : null;
            },
            shouldToggleDropdown: function() {
                this.isExpanded = !this.isExpanded;
            }
        },
	};

</script>

<style lang="scss" scoped>
    
	@import './src/assets/style/variables.scss';

    .dropdown {
        cursor: pointer;
        position: relative;
        user-select: none;
        border-radius: 5px;
        width: 100%;
        height: 50px;
        background: $light;
        margin: 25px 0;
        font-size: 15px;
        font-family: 'Montserrat';
    }

    .text {
        position: absolute;
        line-height: 46px;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: bolder;
        margin-left: 10px;
    }

    .option-spacer {
        cursor: default;
        position: relative;
        background: $light;
        padding-left: 10px;
        padding-bottom: 15px;
        padding-top: 15px;
        height: auto;
    }

    .spacer-text {
        margin-left: 6px;
        font-size: 12px;
        color: $dim;
    }

    .label-container {
        position: relative;
        border-radius: 3px;
        border: $light solid 3px;
        width: 100%;
        height: 100%;
    }

    .label-container p {
        padding-left: 10px;
    }

    .options {
        cursor: pointer;
        position: relative;
        overflow: auto;
        max-height: 300px;
        z-index: 1000;
        width: 100%;
        margin-bottom: 20px;
    }

    .option {
        position: relative;
        padding-left: 20px;
        height: 40px;
        font-weight: bolder;
        background: $light;
        font-size: 16px;
        border: transparent solid 1px;
        transition: all 100ms ease-in;
    }

    .option:hover p,
    .up-arrow:hover,
    .down-arrow:hover {
        opacity: 0.75;
    }

    .active {
        border-color: $theme;
    }
    
    .up-arrow,
    .down-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        margin-right: 20px;
        width: 13px;
        height: 6px;
        background: white;
    }

    .down-arrow {
        clip-path: polygon(100% 0, 0 0, 50% 100%);
    }

    .up-arrow {
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }

    .hide {
        display: none;
    }

</style>