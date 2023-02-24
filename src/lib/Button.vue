<template>
        <button class="orange-button" :class="classes" :disabled="disabled">
            <span v-if="loading" class="orange-loadingIndicator"></span>
            <slot />
        </button>
</template>
<script lang="ts" setup>
import {defineProps, computed} from 'vue' 

const props=defineProps({
    theme:{
        type:String,
        default:'button'
    },
    size:{
        type:String,
        default:'normal'
    },
    level:{
        type:String,
        default:'normal'
    },
    disabled:{
        type:Boolean,
        default:false
    },
    loading:{
        type:Boolean,
        default:false
    }
})
const {theme,size,level,disabled}=props
const classes=computed(()=>{
   return [
    `orange-theme-${theme}`,
    `orange-size-${size}`,
    `orange-level-${level}`
]

})
</script>
<style lang="scss">
$h:32px;
$border-color:#d9d9d9;
$black:#333;
$blue:#40a9ff;
$grey:grey;
$red:red;
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
        margin-top:8px;
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
    &.orange-size-big {
        font-size:24px;
        height:48px;
        padding:0 16px;
    }
    &.orange-size-small {
        font-size:12px;
        height:20px;
        padding:0 4px;
    }
    &.orange-theme-button {
        &.orange-level-main {
            background:$blue;
            color:white;
            border-color:$blue;
            &:hover,
            &:focus {
                background:darken($blue,10%);
                border-color:darken($blue,10%);
            }
        }
        &.orange-level-danger {
            background:$red;
            border-color:$red;
            color:#fff;
            &:hover,
            &:focus {
                background:darken($red,10%);
                border-color:darken($red,10%);
            }
        }
    }
    &.orange-theme-link {
        &.orange-level-danger {
          color:$red;
          &:hover,
          &:focus {
            color:darken($red,10%);
          }
        }
    }
    &.orange-theme-text {
        &.orange-level-main {
            &:hover,
            &:focus {
                color:darken($blue,10%);
            }
        }
        &.orange-level-danger {
            color:$red;
            &:hover,
            &:focus {
                color:darken($red,10%);
            }
        }
    }
    &.orange-theme-button {
        &[disabled] {
            cursor:not-allowed;
            color:$grey;
            &:hover {
                border-color:$grey;
            }
        }
    }
    &.orange-theme-link, &.orange-theme-text {
        &[disabled] {
            cursor:not-allowed;
            color:$grey;
        }
    }
    > .orange-loadingIndicator {
        width:14px;
        height:14px;
        display:inline-block;
        margin-right:4px;
        border-radius:8px;
        border-color:$blue $blue $blue transparent;
        border-style:solid;
        border-width:2px;
        animation:orange-spin 1s infinite linear;
    }
}
@keyframes orange-spin {
    0% {
        transform:rotate(0deg);
    }
    100% {
        transform:rotate(360deg);
    }
}

</style>