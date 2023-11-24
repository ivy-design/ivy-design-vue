import type { App } from 'vue'
import component from './src/index.vue'

component.install = (app: App) => {
  app.component(component.name, component)
}
export default component
