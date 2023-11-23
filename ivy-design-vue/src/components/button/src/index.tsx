import { defineComponent, renderSlot, type PropType, type SetupContext } from 'vue'
import { prefix, type IvyType, type IvySize } from '@/shared'
export default defineComponent({
  name: `${prefix}button`,
  props: {
    type: {
      type: String as PropType<IvyType>,
      validator(value: string) {
        return ['primary', 'success', 'warning', 'danger', 'info'].includes(value)
      }
    },
    size: {
      type: String as PropType<IvySize>,
      default: 'medium',
      validator(value: string) {
        return ['large', 'small', 'medium'].includes(value)
      }
    },
    disabled: {
      type: Boolean
    },
    plain: {
      type: Boolean
    },
    round: {
      type: Boolean
    }
  },
  emits: ['click'],
  setup(props, { emit, attrs, slots }: SetupContext) {
    const handleClick = (event: Event) => {
      emit('click', event)
    }

    const classList = [
      'ivy-button',
      `ivy-button--${props.type || 'default'}`,
      `ivy-button--${props.size}`
    ]
    if (props.disabled) {
      classList.push('is-disabled')
    }
    if (props.plain) {
      classList.push('is-plain')
    }
    if (props.round) {
      classList.push('is-round')
    }

    if (attrs.class) {
      classList.push(attrs.class as string)
    }

    return () => (
      <button
        class={classList.join(' ')}
        style={attrs.style as string}
        disabled={props.disabled}
        onClick={handleClick}
      >
        <span>{renderSlot(slots, 'default')}</span>
      </button>
    )
  }
})
