<template>
    <div>
        <h1>Swich示例</h1>
        <Switch :value="bool" @input="bool=$event"/>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue'
   import Switch from '../lib/Switch.vue'
   export default {
    components:{Switch},
    setup(){
        const bool=ref(false)
        return {bool}
    }
   }
</script>