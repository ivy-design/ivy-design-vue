import { defineComponent, provide, toRef } from 'vue'
import { prefix } from '@/shared'

export default defineComponent({
  name: `${prefix}list`,
  props: {
    size: {
      type: String,
      default: 'medium',
      validator(value: string) {
        return ['small', 'medium', 'large'].includes(value)
      }
    },
    header: String,
    footer: String,
    vertical: Boolean,
    split: {
      type: Boolean,
      default: true
    },
    border: Boolean
  },
  setup(props, { slots }) {
    provide('vertical', toRef(props, 'vertical'))
    provide('split', toRef(props, 'split'))
    provide('border', toRef(props, 'border'))

    const renderHeader = () => {
      if (slots.header?.()) {
        return <div class="ivy-list__header">{slots.header?.()}</div>
      } else if (props.header) {
        return <div class="ivy-list__header">{props.header}</div>
      } else {
        return null
      }
    }
    const renderFooter = () => {
      if (slots.footer?.()) {
        return <div class="ivy-list__footer">{slots.footer?.()}</div>
      } else if (props.footer) {
        return <div class="ivy-list__footer">{props.footer}</div>
      } else {
        return null
      }
    }
    return () => {
      return (
        <div class={['ivy-list', { 'is-border': props.border, 'is-split': props.split }]}>
          {renderHeader()}
          <ul class="ivy-list__body">{slots.default?.()}</ul>
          {renderFooter()}
        </div>
      )
    }
  }
})
