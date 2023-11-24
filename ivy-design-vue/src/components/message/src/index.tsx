import { defineComponent, ref, type PropType } from 'vue'
import { prefix } from '@/shared/index'
import Icon from '../../icon/index'

export type IvyMessageTypes = 'info' | 'success' | 'warning' | 'error'

const iconName: Record<IvyMessageTypes, string> = {
  success: 'success-filled',
  warning: 'warning-filled',
  error: 'circle-close-filled',
  info: 'info-filled'
}

export default defineComponent({
  name: `${prefix}message`,
  props: {
    message: String,
    closable: Boolean,
    type: {
      type: String as PropType<IvyMessageTypes>,
      default: 'info',
      validator: (val: IvyMessageTypes): boolean => {
        return ['info', 'success', 'warning', 'error'].includes(val)
      }
    },
    duration: {
      type: Number,
      default: 3000
    }
  },
  setup(props, { expose }) {
    const visible = ref(false)
    const timer = ref<any | null>(null)

    const handleMouseEnter = () => {
      if (timer.value !== null) {
        clearTimeout(timer.value)
        timer.value = null
      }
    }
    const handleMouseLeave = () => {
      timer.value = setTimeout(() => {
        visible.value = false
      }, props.duration)
    }

    const handleClose = () => {
      visible.value = false
    }

    expose({
      close: handleClose
    })

    return () => (
      <div class="ivy-message-wrap" v-show={visible.value}>
        <div
          class={['ivy-message', `ivy-message-${props.type}`]}
          onMouseenter={handleMouseEnter}
          onMouseleave={handleMouseLeave}
        >
          <div>
            <Icon name={iconName[props.type]} />
          </div>
          <div class="ivy-message-content">{props.message}</div>
          {props.closable ? <Icon name="close" onClick={handleClose} /> : null}
        </div>
      </div>
    )
  }
})
