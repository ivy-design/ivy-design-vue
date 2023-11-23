import { computed, defineComponent, inject, ref, type PropType } from 'vue'
import { prefix, type IvyInputValue } from '@/shared/index'

export default defineComponent({
  name: `${prefix}checkbox`,

  props: {
    modelValue: {
      type: [Number, String, Boolean] as PropType<IvyInputValue>
    },
    label: {
      type: [String, Number, Boolean] as PropType<IvyInputValue>,
      default: false
    },
    trueLabel: {
      type: [String, Number, Boolean] as PropType<IvyInputValue>,
      default: true
    },
    falseLabel: {
      type: [String, Number, Boolean] as PropType<IvyInputValue>,
      default: false
    },
    disabled: Boolean,
    indeterminate: Boolean,
    name: String
  },
  setup(props, { slots, emit }) {
    const curValue = ref(props.modelValue)
    const hasParent = inject('hasParent', false)
    const updateValue = inject('updateValue', (val: IvyInputValue, type: 'add' | 'remove') => {
      return { val, type }
    })

    const hasValue = inject('hasValue', (val: IvyInputValue): boolean => !!val)

    const isChecked = computed(() => {
      let bool = false
      if (hasParent) {
        bool = hasValue(props.label)
      } else {
        bool = props.modelValue === props.trueLabel ? !!props.trueLabel : !!props.falseLabel
        console.log(bool)
      }

      return bool
    })

    const getCheckedValue = (val: IvyInputValue) => {
      const trueValue = props.trueLabel || true
      const falseValue = props.falseLabel || false
      const value = val ? trueValue : falseValue
      return value
    }
    const handleChange = () => {
      if (props.disabled) {
        return false
      }
      if (hasParent) {
        const checked = !isChecked.value
        if (checked) {
          updateValue(props.label, 'add')
        } else {
          updateValue(props.label, 'remove')
        }
      } else {
        curValue.value = !isChecked.value
        const value = getCheckedValue(curValue.value)
        emit('change', value)
        emit('update:modelValue', value)
        // this.dispatch("FormItem", "on-form-change", value);
      }
    }

    return () => {
      return (
        <label class="ivy-checkbox">
          <span
            class={[
              'ivy-checkbox__input',
              { 'is-checked': isChecked.value },
              { 'is-disabled': props.disabled },
              { 'is-indeterminate': props.indeterminate }
            ]}
          >
            <span class="ivy-checkbox__inner"></span>
            <input
              value="label"
              type="checkbox"
              tabindex="-1"
              hidden
              name={props.name}
              onChange={handleChange}
            />
          </span>

          <span class={['ivy-checkbox__label', { 'is-disabled': props.disabled }]}>
            {slots.default?.()}
          </span>
        </label>
      )
    }
  }
})
