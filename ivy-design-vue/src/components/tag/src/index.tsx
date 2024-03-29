import { defineComponent, ref, Transition, type PropType } from 'vue'
import { prefix, type IvyType } from '@/shared'
import ivyIcon from '../../icon/index'

export default defineComponent({
  name: `${prefix}tag`,
  components: { ivyIcon },
  props: {
    animation: Boolean,
    closable: Boolean,
    type: {
      type: String as PropType<IvyType>,
      default: 'primary',
      validator(val: string) {
        return ['primary', 'success', 'warning', 'danger', 'info'].includes(val)
      }
    },
    size: {
      type: String,
      default: 'default',
      validator(val: string) {
        return ['mini', 'small', 'default', 'large'].includes(val)
      }
    },
    theme: {
      type: String,
      default: 'light',
      validator(val: string) {
        return ['light', 'dark', 'plain'].includes(val)
      }
    }
  },
  emits: ['close'],
  setup(props, { emit, slots }) {
    const transfer = ref(props.animation ? '' : 'ivy-zoom-in-center')

    const closed = () => {
      emit('close')
    }

    const renderCloseEl = () => {
      return props.closable
        ? [<ivy-icon class="ivy-tag-close" name="close" onClick={closed} size="12"></ivy-icon>]
        : []
    }

    const classList = ref([
      'ivy-tag',
      `ivy-tag--${props.size}`,
      `ivy-tag--${props.theme}`,
      `ivy-tag--${props.theme}-${props.type}`
    ])

    return () => (
      <Transition name={transfer.value}>
        <div class={classList.value.join(' ')}>
          {slots.default?.()}
          {renderCloseEl()}
        </div>
      </Transition>
    )
  }
})
