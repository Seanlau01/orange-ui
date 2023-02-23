<template>
    <div>
        <h1>Button 示例</h1>
        <h2>示例1</h2>
        <div>
            <Button @click="onClick"
            @focus="onClick"
            @mouseover="onClick"
            size="middle"
            >你好</Button>
            <Button theme="button">你好</Button>
            <Button theme="link">你好</Button>
            <Button theme="text">你好</Button>
        </div>
      
    </div>
</template>
<script lang="ts" setup>
  import Button from '../lib/Button.vue'
   const onClick=()=>{
    console.log('hi')
   }
</script>