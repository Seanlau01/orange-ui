<template>
    <div>
        <Topnav/>
        <div class="banner">
            <h1>SwitchUI</h1>
            <h2>一个简单的UI框架</h2>
            <p class="actions">
                <a>Github</a>
                <router-link to="/doc">开始</router-link>
            </p>
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
  // background:green;
  // clip-path: ellipse(80% 60% at 50% 40%);
  width:100%;
  h1 {
    font-size:30px;
  }
  h2 {
    font-size:16px;
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
    color: #1b6f3f;
    background:#F9C350;
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
      grid-template-rows:1fr auto;
      >svg{
         grid-area:icon;
         width:68px;
         height:68px;
      }
      >h3{
        grid-area:title;
        font-size:28px;
      }
      >p{
        grid-area:text;
      }
    }
  }
}
</style>