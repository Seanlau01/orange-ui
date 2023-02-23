import { createApp } from 'vue'
import './lib/orange.scss'
import './style.scss'
import App from './App.vue'
import {router} from './router'
createApp(App)
.use(router)
.mount('#app')
