import type {App,Component} from 'vue'
import icon from './icon/index'

const components:Component[] = [
    icon
]

export {icon}

export default (app:App)=>{
    components.forEach(comp=>{
        app.component(comp.name as string, comp)
    })

}