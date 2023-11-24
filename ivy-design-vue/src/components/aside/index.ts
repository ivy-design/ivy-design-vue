import type { App } from 'vue'
import aside from './src/index.vue'

aside.install = (app: App) => {
  app.component(aside.name, aside)
}
export default aside
