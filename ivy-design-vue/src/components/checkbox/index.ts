import type { App } from 'vue'
import Checkbox from './src/index.vue'
import CheckboxGroup from './src/group.vue'

Checkbox.install = (app: App) => {
  app.component(Checkbox.name, Checkbox)
}

export { Checkbox, CheckboxGroup }

export default Checkbox
