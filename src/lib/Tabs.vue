<template>
    <div class="orange-tabs">
        <div class="orange-tabs-nav"
        ref="container">
            <div class="orange-tabs-nav-item"
            :class="{selected:t===selected}"
                  v-for="t in titles" :key="t"
                  :ref="el=>{if(t===selected) selectedItem=el}"
                  @click="select(t)">{{ t }}</div>
                  <div class="orange-tabs-nav-indicator" 
                  ref="indicator"></div>
        </div>
        
        <div class="orange-tabs-content">
            <component :key="current.props.title"
            :is="current"></component>
        </div>
        
    </div>
</template>
<script lang="ts">
import Tab from './Tab.vue'
import {ref,onMounted,onUpdated,computed} from 'vue'
export default {
    props:{
      selected:{
        type:String
      }
    },
    setup(props,context){
      const selectedItem=ref<HTMLDivElement>(null) 
      const indicator=ref<HTMLDivElement>(null)
      const container=ref<HTMLDivElement>(null) 
      const x=()=>{
          const {width}=selectedItem.value.getBoundingClientRect()
          indicator.value.style.width=width+'px'
          const {left:left1}=container.value.getBoundingClientRect()
          const {left:left2}=selectedItem.value.getBoundingClientRect()
          const left=left2 - left1
          indicator.value.style.left=left+ 'px'
      }
      onMounted(x)
      onUpdated(x)
       const defaults:object[]=context.slots.default()
        defaults.forEach((tag)=>{
            if(tag.type!==Tab){
                throw new Error('Tabs 子标签必须是 Tab')
            }
       })
       const current=computed(()=>{
        return defaults.find(tag=>tag.props.title===props.selected)
       })
       const titles=defaults.map((tag)=>{
        return tag.props.title
       })           
       const select=(title:String)=>{
          context.emit('update:selected',title)
       }
       return {
          current,selectedItem,indicator,container,defaults,titles,select
       }
    }
}      
</script>
<style lang="scss">
    $blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.orange-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position:relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator{
      position:absolute;
      height:3px;
      width:100px;
      background:$blue;
      left:0;
      bottom:-1px;
      transition:all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
    &-item {
        display:none;
        &.selected {
            display:block;
        }
    }
  }
}
</style>