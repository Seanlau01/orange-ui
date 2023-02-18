<template>
    <div>
        <div class="topnav">
            <div class="logo">LOGO</div>
            <ul class="menu">
                <li>菜单一</li>
                <li>菜单二</li>
            </ul>
            <span class="toggleAside" @click="toggleMenu">三</span>
        </div>  
    </div>
</template>
<script lang="ts" setup>
import { inject } from "@vue/runtime-core";

const menuView=inject<import("@vue/reactivity").Ref<boolean>>('meV')
const toggleMenu=()=>{
    menuView.value=!menuView.value
}
</script>
<style lang="scss" scoped>
  .topnav{
        background: rgb(87,149,114);
        background: linear-gradient(90deg, rgba(87,149,114,1) 0%, rgba(27,111,63,1) 100%);
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
          margin-right:auto;
          color:white;
              .icon {
       width: 2em; height: 2em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
      
    }
            }
        .menu{
            list-style:none;
            display: flex;
            flex-wrap:nowrap;
            white-space: nowrap;
            li{
              margin:0 1em;
              color:white;
         }
    }
    .toggleAside{
        width:40px;
        height:40px;
        top:50%;
        left:16px;
        transform: translateY(-50%);
        display: none;
        position:absolute;
       background:fade-out($color: #000000, $amount: 0.9);
    }
    @media(max-width:500px){
       .menu{display: none;}
       .logo{margin:0 auto;}
       .toggleAside{display:inline-block;}
    }
    
    }
    
</style>