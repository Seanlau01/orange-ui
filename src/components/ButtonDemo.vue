<template>
    <div>
        <h1>Button 示例</h1>
        <h2>示例1</h2>
        <div>
            <Button>你好</Button>
            <Button theme="link">你好</Button>
            <Button theme="text">你好</Button>
        </div>
          <h2>示例2</h2>
          <div>
            <Button>普通</Button>
            <Button size="big">大号</Button>
            <Button size="small">小号</Button>
            <br>
            <Button theme="link">普通链接</Button>
            <Button theme="link" size="big">大号链接</Button>
            <Button theme="link" size="small">小号链接</Button>
            <br>
            <Button theme="text">普通文本</Button>
            <Button theme="text" size="big">大号文本</Button>
            <Button theme="text" size="small">小号文本</Button>
          </div>
          <h2>示例3</h2>
          <div>
            <Button>普通</Button>
            <Button level="main">主要</Button>
            <Button level="danger">危险</Button>
            <br>
            <Button theme="link">普通链接</Button>
            <Button theme="link" level="main">主要链接</Button>
            <Button theme="link" level="danger">危险链接</Button>
            <br>
            <Button theme="text">普通文本</Button>
            <Button theme="text" level="main">主要文本</Button>
            <Button theme="text" level="danger">危险文本</Button>
          </div>
          <h2>示例4</h2>
          <div>
            <Button disabled>禁用按钮</Button>
            <Button theme="link" disabled>禁用链接</Button>
            <Button theme="text" disabled>禁用文字</Button>
          </div>
          <h2>示例5</h2>
          <div>
            <Button loading>你好</Button>
          </div>
    </div>
</template>
<script lang="ts" setup>
  import Button from '../lib/Button.vue'
</script>
<style lang="scss" scoped>
</style>