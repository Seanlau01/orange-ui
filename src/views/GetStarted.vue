<template>
    <div class="markdown-body">
        <h1>开始使用</h1>
        <p>请先安装本组件库</p>
        <p>然后在你的代码里写入下面的代码</p>
        <pre><code>import {Button, Tabs, Switch, Dialog} from 'orange-ui'</code></pre>
        <p>就可以使用我提供的组件</p>
        <h1>Vue 单文件组件</h1>
        <p>代码示例：</p>
        <pre><code>{{ textcode }}</code></pre>
    </div>
</template>
<script lang="ts" setup>
const textcode=`<template>
    <div><Button>按钮</Button></div>       
</template>
<script>
import {Button, Tabs, Switch, Dialog} from 'orange-ui'
export default {
    components:{Button}
}
</script\>
`

</script>