import type { App } from 'vue'
import Scrollbar from './src/index.vue'

Scrollbar.install = (app: App) => {
  app.component(Scrollbar.name, Scrollbar)
}

export default Scrollbar
