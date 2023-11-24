import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import IvyDesign from '@ivy-design/vue'
import '@ivy-design/vue/dist/style.css'

createApp(App).use(IvyDesign).mount('#app')
