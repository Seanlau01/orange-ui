<template>
    <div>
        <button class="orange-switch" :class="{'orange-checked':value}" @click="toggle"><span></span></button>
    </div>
</template>
<script lang="ts">
export default {
    name:'Switch',
    props:{
        value:Boolean
    },
    setup(props,context){
        const toggle=()=>{
            context.emit('input',!props.value)
        }
        return {toggle}
    }
}
</script>
<style lang="scss">
   $h:22px;
   $h2:$h - 4px;
   .orange-switch {
    height:$h;
    width:$h*2;
    border:none;
    background:grey;
    border-radius:calc($h/2);
    position:relative;
    outline:none;
    & span {
    position:absolute;
    top:2px;
    left:2px;
    height:$h2;
    width:$h2;
    background:white;
    border-radius:calc($h2/2);
    transition:left 250ms;
   }
   &.orange-checked {
    background:#F8912B;
    & span{
    left:calc(100% - #{$h2} - 2px);
   }
   }
   &:focus {
    outline:none;
   }
   &:active {
    > span {
        width:$h2+4px;
    }
   }
   &.orange-checked:active {
    > span {
        width:$h2 + 4px;
        margin-left:-4px;
    }
   }
   }
 
</style>