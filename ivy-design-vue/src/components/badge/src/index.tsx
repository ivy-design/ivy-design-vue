import { defineComponent, renderSlot, type PropType } from 'vue'
import { prefix, type IvyType } from '@/shared'

export default defineComponent({
  name: `${prefix}badge`,
  props: {
    type: {
      type: String as PropType<IvyType>,
      default: 'danger',
      validator(val: string) {
        return ['danger', 'primary', 'success', 'warning', 'info'].includes(val)
      }
    },
    isDot: Boolean,
    max: {
      type: Number,
      default: 99
    },
    value: [Number, String]
  },
  setup(props, { slots }) {
    return () => (
      <div class={['ivy-badge', `is-${props.type}`, { 'is-dot': props.isDot }]}>
        {typeof props.value === 'number' ? (
          <sup class="ivy-badge-content">
            {props.value > props.max ? props.max + '+' : props.value}
          </sup>
        ) : (
          <sup class="ivy-badge-content">{props.value}</sup>
        )}

        {renderSlot(slots, 'default')}
      </div>
    )
  }
})
