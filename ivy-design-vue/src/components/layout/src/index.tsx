import { computed, defineComponent } from 'vue'
import { prefix } from '@/shared'

export default defineComponent({
  name: `${prefix}layout`,
  props: {
    direction: {
      type: String,
      validator(value: string) {
        return ['vertical', 'horizontal'].indexOf(value) !== -1
      }
    }
  },
  setup(props, { slots }) {
    const dir = computed(() => {
      if (props.direction) {
        return props.direction
      }
      const children = slots.default?.() || []
      const tmp = children.filter((cur: any) => {
        return ['ivy-header', 'ivy-footer'].includes(cur.type.name)
      })
      if (tmp && tmp.length > 0) {
        return 'horizontal'
      } else {
        return 'vertical'
      }
    })
    return () => <div class={['ivy-layout', `is-${dir.value}`]}>{slots.default?.()}</div>
  }
})
