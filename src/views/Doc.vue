<template>
    <div class="layout">
        <Topnav  class="nav"/>
        <div class="content">
            <aside v-if="menuView">
            <h2>文档</h2>
            <ol>
               <li>
                <router-link to="/doc/intro">介绍</router-link>
               </li>
               <li>
                <router-link to="/doc/install">安装</router-link>
               </li>
               <li>
                <router-link to="/doc/get-started">开始使用</router-link>
               </li>
            </ol>
            <h2>组件列表</h2>
            <ol>
               <li>
                <router-link to="/doc/switch">Switch 组件</router-link>
               </li>
               <li>
                <router-link to="/doc/button">Button 组件</router-link>
               </li>
               <li>
                <router-link to="/doc/dialog">Dialog 组件</router-link>
               </li>
               <li>
                <router-link to="/doc/tab">Tab 组件</router-link>
               </li>
            </ol>
            </aside>
            <main>
            <router-view/>
            </main>
        </div>
       
    </div>
</template>
<script lang="ts" setup>
import Topnav from '../components/Topnav.vue'
import { inject, Ref } from 'vue'
const menuView=inject<Ref<boolean>>('meV')
</script>
<style lang="scss" scoped>
.layout{
    display:flex;
    flex-direction: column;
    min-height:100vh;
    .nav{
        flex-shrink:0;     
    }
    .content{
        flex-grow:1;
        padding-top:60px;
        padding-left:156px;
        @media(max-width:500px){
            padding-left:0;
        }
    }
}
.content{
    display:flex;
    aside{
        flex-shrink:0;
    }
    main{
        flex-grow:1;
        padding:16px 16px 16px 304px;
        @media(max-width:600px){
            padding-left:30px;
        }
    }
}
   aside{
       z-index:9;
        background:linear-gradient(to bottom,#1E7141 0%,#579572 100%);
        width:300px;
        padding:16px 0;
        position:fixed;
        top:0;
        left:0;
        padding-top:70px;
        height:100%;
        h2{
            margin-bottom:4px;
            padding:0 16px;
            color:#F8912B;
        }
        ol{
            li{
                list-style:none;
                padding:4px 0;
                a{
                    display:block;
                    text-decoration:none;
                    padding:4px 16px;
                    color:#F8912B;
                    border-radius:10px 0 0 10px;
                }
                .router-link-active{
                    background:white;
                }
            }
        }
        main{
            overflow:auto;
            background:#F8912B;
        }
        }
</style>