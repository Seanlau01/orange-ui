<template>
        <template v-if="visible">
            <Teleport to="body">
            <div class="orange-dialog-overlay"
            @click="onClickOverlay"></div>
            <div class="orange-dialog-wrapper">
                <div class="orange-dialog">
                    <header>
                        {{title}}
                        <span class="orange-dialog-close"
                        @click="close">X</span>
                    </header>
                    <main>
                        <slot name="content"/>
                    </main>
                    <footer>
                        <Button level="main" @click="ok">OK</Button>
                        <Button @click="cancel">Cancel</Button>
                    </footer>
                </div>
            </div>
        </Teleport>
        </template>
</template>
<script lang="ts">
   import Button from './Button.vue'
   export default {
    props:{
       visible:{
        type:Boolean,
        default:false
       },
       closeOnClickOverlay:{
        type:Boolean,
        default:true
       },
       title:{
         type:String,
         default:'提示'
       },
       ok:{
        type:Function
       },
       cancel:{
        type:Function
       }
    },
       components:{
        Button
    },
    setup(props,context){
        const close=()=>{
           context.emit('update:visible',false) 
        }
        const onClickOverlay=()=>{
             if(props.closeOnClickOverlay){
                close()
             }
        }
        const ok=()=>{
             if(props.ok?.()!==false){
                close()
             }    
        }
        const cancel=()=>{
            props.cancel && props.cancel() 
             close()
        }
        return {
                close,onClickOverlay,ok,cancel
            }
    }
   }
</script>
<style lang="scss">
.orange-dialog-overlay {
    height:100px;
    width:100px;
    background:grey;
}
.orange-dialog {
    background:#fff;
    border-radius:4px;
    box-shadow:0 0 3px fade-out(black,0.5);
    min-width:380px;
    max-width:90%;
}
</style>