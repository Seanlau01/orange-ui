<template>
    <div :size="size">
        <button class="orange-button" 
        :class="`orange-theme-${theme}`"
        v-bind="rest">
            <slot />
        </button>
    </div>
</template>
<script lang="ts">
   export default {
    inheritAttrs:false
   }
</script>
<script lang="ts" setup>
import {useAttrs,defineProps} from 'vue' 
const {size,...rest}=useAttrs()
const props=defineProps({
    theme:{
        type:String,
        default:'button'
    }
})
</script>
<style lang="scss">
$h:32px;
$border-color:#d9d9d9;
$black:#333;
$blue:#40a9ff;
$border-radius:4px;
.orange-button {
    box-sizing:border-box;
    height:$h;
    padding:0 12px;
    cursor:pointer;
    display:inline-flex;
    justify-content:center;
    align-items:center;
    white-space:nowrap;
    background:white;
    color:$black;
    border:1px solid $border-color;
    border-radius:$border-radius;
    box-shadow:0 1px 0 fade-out(black,0.95);
    &+& {
        margin-left:8px;
    }
    &:hover,
    &:focus {
        color:$blue;
        border-color:$blue;
    }
    &:focus {
        outline:none;
    }
    &::-moz-focus-inner {
        border:0;
    }
    &.orange-theme-link {
        border-color:transparent;
        box-shadow:none;
        color:$blue;
        &:hover,&:focus {
            color:lighten($blue,10%);
        }
    }
    &.orange-theme-text {
        border-color:transparent;
        box-shadow:none;
        color:inherit;
        &:hover,&:focus {
            background:darken(white,5%);
        }
    }
}

</style>