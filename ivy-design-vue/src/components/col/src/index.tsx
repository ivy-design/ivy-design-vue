import { defineComponent, h, computed, inject } from 'vue'
import { prefix } from '@/shared'
export default defineComponent({
  name: `${prefix}col`,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: [Number, String],
    offset: [Number, String]
  },
  setup(props, { slots }) {
    const classList: any[] = ['ivy-col']
    if (props.span) {
      classList.push(`ivy-col-${props.span}`)
    }
    if (props.offset) {
      classList.push(`ivy-col-offset-${props.offset}`)
    }
    const padding = computed(() => {
      const gutter = inject('gutter')
      const width = typeof gutter === 'string' ? parseFloat(gutter) / 2 : (gutter as number) / 2
      return {
        'padding-left': width + 'px',
        'padding-right': width + 'px'
      }
    })
    return () =>
      h(
        props.tag,
        {
          class: classList.join(' '),
          style: {
            ...padding
          }
        },
        slots.default?.()
      )
  }
})
