<template>
    <div>
        <h1>Dialog示例</h1>
        <h2>示例1</h2>
        <Button @click="toggle">toggle</Button>
        <Dialog v-model:visible="bool"
        :closeOnClickOverlay="COCO_bool"
        :ok="f1" :cancel="f2">
        <template v-slot:title>
            <div>
              标题
            </div>
        </template>
        <template v-slot:content>
            <div>
                <strong>第一行字</strong>
                <p>第二行字</p>
            </div>
        </template> 
        </Dialog>
        <h2>示例2</h2>
         <Button @click="showDialog">toggle</Button>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Button from '../lib/Button.vue'
import Dialog from '../lib/Dialog.vue'
import {openDialog} from '../openDialog.ts'
const bool=ref(false)
const COCO_bool=ref(false)
const toggle=()=>{
    bool.value=!bool.value
}
const f1=()=>{
     return true
}
const f2=()=>{
    
}
const showDialog=()=>{
    openDialog({
        title:'标题',
        content:'你好',
        closeOnClickOverlay:false,
        ok(){
            console.log('ok')
        },
        cancel(){
            console.log('cancel')
        }
    })
}
</script>
<style lang="scss">

</style>