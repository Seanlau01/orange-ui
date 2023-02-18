<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { provide } from "@vue/runtime-core";
import { router } from "./router";
  const pageW=document.documentElement.clientWidth 
  const menuView=ref( pageW > 500 ? true : false)
  provide('meV',menuView)
  router.afterEach(()=>{
    if(pageW<=500){
      menuView.value=false
    }
  })
</script>

<template>
  <div>
    <span>hi,i am louis </span>
    <div>导航栏 |
      <router-link to="/">Home</router-link> |
      <router-link to="/doc">Doc</router-link>
    </div>
    <router-view/>
  </div> 
</template>

<style scoped>

</style>
