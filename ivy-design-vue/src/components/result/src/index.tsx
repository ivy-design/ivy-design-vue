import { defineComponent, type PropType } from 'vue'
import { prefix, type IvyType } from '@/shared'
import IvyIcon from '../../icon'

export type IvyResultType = 'success' | 'error' | 'info' | 'warning'

interface IconMap {
  success: string
  error: string
  info: string
  warning: string
}

const iconMap: IconMap = {
  success: 'success-filled',
  error: 'circle-close-filled',
  info: 'info-filled',
  warning: 'warning-filled'
}

export default defineComponent({
  name: `${prefix}result`,
  props: {
    icon: {
      type: String as PropType<IvyResultType>,
      default: 'info',
      validator: (val: string) => {
        return Object.keys(iconMap).includes(val)
      }
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    return () => {
      return (
        <div class="ivy-result">
          <div class="ivy-result__icon">
            {slots.icon ? (
              slots.icon?.()
            ) : (
              <IvyIcon class={`is-${props.icon}`} name={iconMap[props.icon]} />
            )}
          </div>
          <div class="ivy-result__content">
            {slots.content
              ? slots.content?.()
              : [
                  <p class="ivy-result__title">{props.title}</p>,
                  <p class="ivy-result__description">{props.description}</p>
                ]}
          </div>
          <div class="ivy-result__extra">{slots.extra?.()}</div>
        </div>
      )
    }
  }
})
