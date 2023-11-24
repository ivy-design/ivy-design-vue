import { prefix } from '@/shared'
import { defineComponent, provide } from 'vue'

export default defineComponent({
  name: `${prefix}cell-group`,
  props: {
    border: Boolean
  },
  setup(props, { slots }) {
    provide('border', props.border)
    const classStr = props.border ? `ivy-cell-group is-border` : 'ivy-cell-group'
    return () => <div class={classStr}>{slots.default?.()}</div>
  }
})
