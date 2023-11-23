import { defineComponent, inject, ref, type Ref } from 'vue'
import { prefix } from '@/shared'

export default defineComponent({
  name: `${prefix}list-item`,
  props: {
    avatar: String,
    header: String,
    description: String
  },
  setup(props, { slots }) {
    const vertical = inject<Ref<boolean>>('vertical', ref(false))
    const split = inject<Ref<boolean>>('split', ref(true))
    // const border = inject<Ref<boolean>>("border", ref(false));

    const renderAvatar = () => {
      if (props.avatar) {
        return (
          <div class="ivy-list-item--avatar">
            <img src={props.avatar} alt="avatar" />
          </div>
        )
      } else {
        return null
      }
    }
    return () => {
      if (vertical.value) {
        return (
          <li class={['ivy-list-item']}>
            <div class="ivy-list-item--wrap">
              <div class="ivy-list-item--body">
                {renderAvatar()}
                <div>
                  <div class="ivy-list-item--header">
                    {props.header ? props.header : slots.header?.()}
                  </div>
                  <div class="ivy-list-item--description">
                    {props.description ? props.description : slots.description?.()}
                  </div>
                </div>
              </div>
              <div class="ivy-list-item--body">{slots.default?.()}</div>
              <div class="ivy-list-item--actions">{slots.action?.()}</div>
            </div>
            <div class="ivy-list-item--extra">{slots.extra?.()}</div>
          </li>
        )
      } else {
        return (
          <li class={['ivy-list-item', { 'is-split': split.value }]}>
            <div class="ivy-list-item--body">
              {renderAvatar()}
              <div>
                <div class="ivy-list-item--header">
                  {props.header ? props.header : slots.header?.()}
                </div>
                <div class="ivy-list-item--description">
                  {props.description ? props.description : slots.description?.()}
                </div>
              </div>
            </div>
            <div class="ivy-list-item--actions">{slots.action?.()}</div>
          </li>
        )
      }
    }
  }
})
