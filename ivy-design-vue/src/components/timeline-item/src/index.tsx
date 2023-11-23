import { defineComponent } from 'vue'
import { prefix } from '@/shared'

export default defineComponent({
  name: `${prefix}timeline-item`,
  inject: ['timeline'],
  props: {
    timestamp: String,
    hideTimestamp: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'bottom',
      validator(value: string) {
        return ['top', 'bottom'].includes(value)
      }
    },
    type: {
      type: String,
      validator(value: string) {
        return ['primary', 'success', 'warning', 'danger', 'info'].includes(value)
      }
    },
    color: String,
    size: {
      type: String,
      default: 'normal',
      validator(value: string) {
        return ['normal', 'large'].includes(value)
      }
    },
    icon: String
  },
  setup(props, { slots }) {
    const renderIcon = () => {
      const iconClass = ['ivy-timeline-item__node', `ivy-timeline-item__node--${props.size}`]
      if (props.type) {
        iconClass.push(`ivy-timeline-item__node--${props.type}`)
      }
      if (slots.dot) {
        return <div class="ivy-timeline-item__dot">{slots.dot?.()}</div>
      } else {
        return (
          <div
            class={iconClass}
            style={{
              backgroundColor: props.color
            }}
          >
            {props.icon ? (
              <ivy-icon class="ivy-timeline-item__icon" name={props.icon}></ivy-icon>
            ) : (
              []
            )}
          </div>
        )
      }
    }

    const renderContent = () => {
      if (props.hideTimestamp) {
        return <div class="ivy-timeline-item__content">{slots.default?.()}</div>
      } else {
        if (props.placement === 'top') {
          return [
            <div class="ivy-timeline-item__timestamp is-top">{props.timestamp}</div>,
            <div class="ivy-timeline-item__content">{slots.default?.()}</div>
          ]
        } else {
          return [
            <div class="ivy-timeline-item__content">{slots.default?.()}</div>,
            <div class="ivy-timeline-item__timestamp is-bottom">{props.timestamp}</div>
          ]
        }
      }
    }

    return () => (
      <div class="ivy-timeline-item">
        <div class="ivy-timeline-item__tail"></div>
        {renderIcon()}
        <div class="ivy-timeline-item__wrapper">{renderContent()}</div>
      </div>
    )
  }
})
