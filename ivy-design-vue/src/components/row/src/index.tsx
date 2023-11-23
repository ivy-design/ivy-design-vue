import { defineComponent, h } from 'vue'
import { prefix } from '@/shared'

export default defineComponent({
  name: `${prefix}row`,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    flex: {
      type: Boolean,
      default: false
    },
    justify: {
      type: String,
      default: 'start',
      validator(value: string) {
        return ['start', 'end', 'center', 'space-around', 'space-between'].includes(value)
      }
    },
    align: {
      type: String,
      default: 'top',
      validator(value: string) {
        return ['top', 'middle', 'bottom'].includes(value)
      }
    }
  },
  setup(props, { slots, attrs }) {
    const classList = ['ivy-row', `is-align-${props.align}`]
    if (props.flex) {
      classList.push('ivy-row--flex')
    }

    return () => h(props.tag, { class: classList.join(' '), style: attrs.style }, slots.default?.())
  }
})
