import { defineComponent } from 'vue'
import { prefix } from '@/shared'

export default defineComponent({
  name: `${prefix}timeline`,
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  },
  provide() {
    return {
      timeline: this
    }
  },
  setup(props, { slots }) {
    return () => (
      <div class="ivy-timeline">
        {props.reverse ? slots?.default?.()?.reverse() : slots.default?.()}
      </div>
    )
  }
})
