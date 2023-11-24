import { defineComponent, provide, ref, type PropType } from 'vue'
import { prefix, type IvyInputValue } from '@/shared/index'

export default defineComponent({
  name: `${prefix}checkbox-group`,

  props: {
    modelValue: {
      type: Array as PropType<IvyInputValue[]>,
      default() {
        return []
      }
    }
  },
  setup(props, { slots, emit }) {
    const curValue = ref(props.modelValue)
    const addValue = (val: IvyInputValue) => {
      curValue.value.push(val)
      emit('update：modelValue', curValue.value)
      emit('change', curValue.value)
      //   this.dispatch("FormItem", "on-form-change", curValue.value);
    }
    const removeValue = (val: IvyInputValue) => {
      const index = curValue.value.indexOf(val)
      curValue.value.splice(index, 1)
      emit('change', curValue.value)
      //   this.dispatch("FormItem", "on-form-change", curValue.value);
    }
    provide('updateValue', (val: IvyInputValue, type: 'add' | 'remove') => {
      if (type === 'add') {
        addValue(val)
      } else if (type === 'remove') {
        removeValue(val)
      }
    })

    provide('hasValue', (val: IvyInputValue) => curValue.value.includes(val))

    provide('hasParent', true)
    return () => {
      return <div class="ivy-checkbox-group">{slots.default?.()}</div>
    }
  }
})
