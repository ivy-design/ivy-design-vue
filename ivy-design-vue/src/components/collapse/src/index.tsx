import { defineComponent, provide, ref } from 'vue'
import { prefix } from '@/shared'
import useIndex from '@/hooks/useIndex'

export default defineComponent({
  name: `${prefix}collapse`,

  props: {
    modelValue: [String, Number, Array],
    accordion: Boolean,
    arrow: {
      type: String,
      validator(value: string) {
        return ['right', 'none'].includes(value)
      }
    }
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const value: any = ref(props.modelValue)
    if (!props.modelValue) {
      value.value = props.accordion ? null : []
    }

    provide('arrow', props.arrow)
    provide('accordion', props.accordion)
    provide('value', value)
    /**对 没有设置 props.index 的collapseItem 生成唯一index */
    const { generateIndex } = useIndex()

    provide('generateIndex', generateIndex)

    provide('update', (index: any) => {
      if (props.accordion) {
        value.value = value.value === index ? null : index
        emit('update:modelValue', value.value)
      } else {
        const has = (value.value as Array<any>).includes(index)
        if (has) {
          value.value = (value.value as Array<any>).filter((c) => c !== index)
        } else {
          value.value = [...(value.value as Array<any>), index]
        }
        emit('update:modelValue', value.value)
      }
    })

    return () => <div class="ivy-collapse">{slots.default?.()}</div>
  }
})
