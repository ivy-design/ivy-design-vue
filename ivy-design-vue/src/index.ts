import { type App } from 'vue'

import './styles/index.scss'

import { components } from './components/index'

let INSTALLED_KEY = false

export default (app: App) => {
  if (INSTALLED_KEY) return
  INSTALLED_KEY = true
  components.forEach((comp) => {
    app.component(comp.name as string, comp)
  })
}
