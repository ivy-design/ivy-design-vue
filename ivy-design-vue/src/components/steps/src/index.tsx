import { defineComponent, provide, ref, watch } from 'vue'
import { prefix } from '@/shared'
import useIndex from '@/hooks/useIndex'

export default defineComponent({
  name: `${prefix}steps`,
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    status: {
      type: String,
      default: 'process',
      validator(val: string) {
        const types = ['wait', 'process', 'finish', 'error']
        return types.includes(val)
      }
    },
    finishStatus: {
      type: String,
      default: 'finish',
      validator(val: string) {
        const types = ['wait', 'process', 'finish', 'error', 'success']
        return types.includes(val)
      }
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(val: string) {
        const types = ['horizontal', 'vertical']
        return types.includes(val)
      }
    }
  },
  setup(props, { slots }) {
    const currentValue = ref(props.modelValue)
    const { generateIndex } = useIndex()
    provide('generateIndex', generateIndex)
    provide('active', currentValue)
    const status = ref(props.status)
    provide('status', status)

    watch(
      () => props.modelValue,
      (val) => {
        currentValue.value = val
      }
    )

    return () => (
      <div class={['ivy-steps', `ivy-steps-${props.direction}`]}>{slots.default?.()}</div>
    )
  }
})
