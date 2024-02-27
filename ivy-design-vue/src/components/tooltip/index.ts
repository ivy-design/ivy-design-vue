import type { App } from 'vue'
import Tooltip from './src/index.vue'

Tooltip.install = (app: App) => {
  app.component(Tooltip.name, Tooltip)
}

export default Tooltip
