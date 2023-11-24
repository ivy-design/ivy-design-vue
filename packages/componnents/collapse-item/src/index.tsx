import CollapseTransition from '../../collapse-transition'
import Icon from '../../icon'

import { computed, defineComponent, inject } from 'vue'
import { prefix } from '@/utils'

export default defineComponent({
  name: `${prefix}collapse-item`,
  props: {
    header: String,
    index: [String, Number]
  },
  setup(props, { slots }) {
    const arrowPosition = inject('arrow')
    const collapseValue: any = inject('value')
    const accordion = inject('accordion')
    const update: any = inject('update')

    const generateIndex: any = inject('generateIndex')

    const index = props.index ?? generateIndex()

    const isActive = computed(() => {
      if (accordion) {
        return index === collapseValue.value
      } else {
        return collapseValue.value?.includes(index)
      }
    })
    const handleChange = () => {
      update(index)
    }

    return () => (
      <div class={['ivy-collapse-item', { 'ivy-collapse-item-active': isActive.value }]}>
        <div class="ivy-collapse-item__header" onClick={handleChange}>
          <Icon
            name="arrow-right"
            class={['ivy-icon-right', `ivy-collapse-arrow-${arrowPosition}`]}
          ></Icon>
          <span>{slots.header ? slots.header?.() : props.header}</span>
        </div>
        <CollapseTransition>
          <div v-show={isActive.value} class="ivy-collapse-item__wrap">
            <div class="ivy-collapse-item__wrap-box">{slots.default?.()}</div>
          </div>
        </CollapseTransition>
      </div>
    )
  }
})
