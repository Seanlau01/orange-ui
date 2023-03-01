<template>
    <div>
        <div class="topnav">
            <router-link to="/" class="logo">
                <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-Orange"></use>
                </svg>
            </router-link>
            <router-link to="/doc" class="menu">
                文档
            </router-link>
            <a v-if="hidHomeMenu" class="toggleAside" @click="toggleMenu">
                <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-round_menu_fill"></use>
                </svg>
            </a>
        </div>  
    </div>
</template>
<script lang="ts" setup>
import { inject } from "@vue/runtime-core";
import { defineProps } from 'vue'
const props=defineProps({
    hidHomeMenu:{
        type:Boolean,
        default:true
    }
})
const menuView=inject<import("@vue/reactivity").Ref<boolean>>('meV')
const toggleMenu=()=>{
    menuView.value=!menuView.value
}
</script>
<style lang="scss" scoped>
  .topnav{
        padding:16px;  
        position:fixed;
        top:0;
        left:0;
        width:100%;
        z-index:10;
        display:flex;
        justify-content: center;
        align-items: center;
        .logo{
            
            max-width:6em;
          margin-left:100px;
          margin-right:auto;
          color:white;
              .icon {
       width: 2em; height: 2em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
       font-size:30px;
    }
            }
        .menu{
            list-style:none;
           margin-right:40px;
           font-size:22px;
           color:#F8912B;
            
    }
    .toggleAside{
        width:40px;
        height:40px;
        top:50%;
        left:16px;
        transform: translateY(-50%);
        display: none;
        position:absolute;
      
        .icon {
       width: 2em; height: 2em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
       font-size:20px;
    }
       
    }
    @media(max-width:500px){
       .menu{display: none;}
       .logo{margin:0 auto;}
       .toggleAside{display:inline-block;}
    }
    
    }
    
</style>