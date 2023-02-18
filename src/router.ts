import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/SwitchDemo.vue'
import Tab from './components/TabDemo.vue'
import Dialog from './components/DialogDemo.vue'
import Button from './components/ButtonDemo.vue'
import { createWebHashHistory,createRouter } from 'vue-router'

const history=createWebHashHistory()
export const router=createRouter({
    history:history,
    routes:[{
        path:'/',
        component:Home
    },{
        path:'/doc',
        component:Doc,children:[
            {path:'/',component:Doc},
            {path:'switch',component:Switch},
            {path:'tab',component:Tab},
            {path:'dialog',component:Dialog},
            {path:'button',component:Button},
        ]
    }]
}
)
