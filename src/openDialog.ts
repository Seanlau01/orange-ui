import Dialog from './lib/Dialog.vue'
import {createApp,h} from 'vue'
export const openDialog=(options)=>{
   const {title,content,closeOnClickOverlay,ok,cancel}=options
   const container=document.createElement('div')
   document.body.appendChild(container)
   const close=()=>{
      app.unmount(container)
      container.remove()
   }
   const app=createApp(({
     render(){
        return h(Dialog,{visible:true,
        'onUpdate:visible':(newVisible)=>{
           if(newVisible===false){
               close()
           }
        },
        closeOnClickOverlay,ok,cancel
       },{
            title:title,content:content
        })
     }
   }))
   app.mount(container)
}