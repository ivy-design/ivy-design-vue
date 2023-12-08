import type { App } from 'vue'
import AspectRatio from './src/index.vue'

AspectRatio.install = (app: App) => {
  app.component(AspectRatio.name, AspectRatio)
}
export default AspectRatio
