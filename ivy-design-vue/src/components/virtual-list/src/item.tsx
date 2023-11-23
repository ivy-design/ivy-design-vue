import { defineComponent, renderSlot, type SetupContext } from 'vue'
import { prefix } from '@/shared'

export default defineComponent({
  name: `${prefix}virtual-list-item`,
  props: {
    height: String
  },
  emits: ['click'],
  setup(props, { slots }: SetupContext) {
    return () => <div style={{ height: props.height }}>{renderSlot(slots, 'default')}</div>
  }
})
