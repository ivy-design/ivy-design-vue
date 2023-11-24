import type { App } from 'vue'
import icon from './src/icon.vue'

icon.install = (app: App) => {
  app.component(icon.name, icon)
}
export default icon
