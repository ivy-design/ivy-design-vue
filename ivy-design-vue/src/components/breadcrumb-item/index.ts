import type { App } from 'vue'
import BreadcrumbItem from './src/index.vue'

BreadcrumbItem.install = (app: App) => {
  app.component(BreadcrumbItem.name, BreadcrumbItem)
}

export default BreadcrumbItem
