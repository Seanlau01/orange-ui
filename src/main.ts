import { createApp } from 'vue'
import './lib/orange.scss'
import './style.scss'
import App from './App.vue'
import {router} from './router'
import 'github-markdown-css'
createApp(App)
.use(router)
.mount('#app')
