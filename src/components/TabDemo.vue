<template>
    <div>
        <h1>Tabs 示例</h1>
        <h2>示例1</h2>
      <Tabs v-model:selected="chosed">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
      </Tabs>
    </div>
</template>
<script lang="ts" setup>
   import Tabs from '../lib/Tabs.vue'
   import Tab from '../lib/Tab.vue'
   import { ref } from 'vue'
   const chosed=ref('导航2')
   
</script>