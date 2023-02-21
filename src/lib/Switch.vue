<template>
    <div>
        <button :class="{checked:x}" @click="toggleBtn"><span></span></button>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
    name:'Switch',
    setup(){
        const x=ref(false)
        const toggleBtn=()=>{
            x.value=!x.value
        }
        return {x,toggleBtn}
    }
}
</script>
<style lang="scss" scoped>
   $h:22px;
   $h2:$h - 4px;
   button {
    height:$h;
    width:$h*2;
    border:none;
    background:grey;
    border-radius:calc($h/2);
    position:relative;
    outline:none;
   }
   span {
    position:absolute;
    top:2px;
    left:2px;
    height:$h2;
    width:$h2;
    background:white;
    border-radius:calc($h2/2);
    transition:left 0.5s;
   }
   button.checked {
    background:blue;
   }
   button.checked span{
    left:calc(100% - #{$h2} - 2px);
   }
</style>