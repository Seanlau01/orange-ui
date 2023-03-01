<template>
    <div>
        <Topnav :hidHomeMenu="false"/>
        <div class="banner">
            <h1>SwitchUI</h1>
            <h2>一个简单的UI框架</h2>
            <p class="actions">
                <a>Github</a>
                <router-link to="/doc">开始</router-link>
            </p>   
        </div>  
        <div class="features">
              <ul>
                <li>
                  <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-Vue"></use>
                  </svg>
                  <h3>基于Vue3</h3>
                  <p>骄傲地使用了Vue 3 Composition API</p>
                </li>
                <li>
                  <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-ts"></use>
                  </svg>
                  <h3>基于TypeScript</h3>
                  <p>源代码采用TypeScript书写（非严格检查）</p>
                </li>
                <li>
                  <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-light"></use>
                  </svg>
                  <h3>代码易读</h3>
                  <p>每个组件的源代码都极其简洁</p>
                </li>
              </ul>
            </div>
    </div>
</template>
<script lang="ts" setup>
import Topnav from '../components/Topnav.vue'
</script>
<style lang="scss" scoped>
  .banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:100%;
  background: linear-gradient(
    90deg,
    rgba(87, 149, 114, 1) 0%,
    rgba(27, 111, 63, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
  h1 {
    font-size:2em;
    font-weight:400;
  }
  h2 {
    font-weight:400;
    font-size:1.5em;
  }
  .actions {
    padding: 34px 0;
    a {
    border-radius: 8px;
    margin: 0 8px;
    display: inline-block;
    $h: 30px;
    height: $h;
    line-height: $h;
    border-radius: 4px;
    padding: 6px 30px; 
    color:#fff;
    background:#CD734E;
  }
  }
  
}
.features {
  margin:64px auto;
  padding:0 16px;
  @media(min-width:800px){
    width:800px;
    >ul{
      >li{
        width:50%;
      }
    }
  }
  @media(min-width:1200px){
    width:1200px;
    >ul{
      >li{
        width:33.3333%;
      }
    }
  }
  >ul{
    display:flex;
    flex-wrap:wrap;
    >li{
      margin:16px 0;
      display:grid;
      justify-content:start;
      align-content:space-between;
      grid-template-areas:
      "icon title"
      "icon text";
      margin:16px 0;
      grid-template-columns:80px auto;
      grid-template-rows:60px auto;
      >svg{
         grid-area:icon;
         width:68px;
         height:68px;
         align-self:center;
      }
      >h3{
        grid-area:title;
        font-size:24px;
        font-weight:400;
      }
      >p{
        grid-area:text;
        font-size:14px;
      }
    }
  }
}
</style>