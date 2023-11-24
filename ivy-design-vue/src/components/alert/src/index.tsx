import { defineComponent, h, resolveComponent } from 'vue'
import { prefix } from '@/shared'

const iconName: { [x: string]: any } = {
  success: 'success-filled',
  warning: 'warning-filled',
  danger: 'circle-close-filled',
  info: 'info-filled'
}

export default defineComponent({
  name: `${prefix}alert`,
  props: {
    type: {
      type: String,
      default: 'success',
      validator(value: string) {
        return ['success', 'danger', 'warning', 'info'].includes(value)
      }
    },
    header: String,
    showIcon: Boolean,
    iconSize: {
      type: String,
      default: '16px'
    }
  },
  setup(props, { slots }) {
    const classStr = `ivy-alert is-${props.type}`

    const renderTitle = () => {
      if (slots.header) {
        return <div class="ivy-alert__title">{slots.header?.()}</div>
      } else if (props.header) {
        return <span class="ivy-alert__title">{props?.header || ''}</span>
      } else {
        return []
      }
    }

    const renderDesc = () => {
      return <div class="ivy-alert__description">{slots.default?.()}</div>
    }

    const renderIcon = () => {
      return h(resolveComponent('ivy-icon'), {
        name: iconName[props.type],
        size: props.iconSize,
        class: 'ivy-alert__icon'
      })
    }

    return () => {
      if (props.showIcon) {
        return (
          <div class={classStr}>
            {() => [
              renderIcon(),
              <div class="ivy-alert__content">{() => [renderTitle(), renderDesc()]}</div>
            ]}
          </div>
        )
      } else {
        return (
          <div class={classStr}>
            <div class="ivy-alert__content">{() => [renderTitle(), renderDesc()]}</div>
          </div>
        )
      }
    }
  }
})
