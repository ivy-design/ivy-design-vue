import {
  defineComponent,
  withDirectives,
  Transition,
  Teleport,
  ref,
  onMounted,
  provide,
  reactive,
  type ComponentOptions
} from 'vue'
import { prefix } from '@/shared/index'
import IvyInput from '@/components/input'
import clickOutside from '@/directives/click-outside'
import IvyOption from './option'

export default defineComponent({
  name: `${prefix}select`,

  props: {
    emptyText: String,
    modelValue: [String, Number],
    disabled: Boolean,
    teleport: Boolean,
    placeholder: {
      type: String,
      default: '请选择'
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { slots, emit }) {
    const visible = ref(false)
    const handleClose = () => {
      visible.value = false
    }

    const curValue = ref(props.modelValue)
    const curLabel = ref<number | string>('')

    const updateLabel = (value: string | number) => {
      curLabel.value = value
    }
    const updateValue = (value: string | number) => {
      curValue.value = value
    }

    provide('updateLabel', updateLabel)
    provide('updateValue', updateValue)
    provide('closeDropdown', handleClose)

    const children = reactive<ComponentOptions[]>(slots.default?.() || [])
    onMounted(() => {
      children.find((c) => {
        if (c.props.value === curValue.value) {
          updateLabel(c.props.label || c.props.value)
        }
      })
    })

    const handleClick = () => {
      visible.value = true
    }

    return () => {
      return (
        <div class={['ivy-select', { 'is-focus': visible.value }]} onClick={handleClick}>
          <IvyInput
            modelValue={curLabel.value}
            onUpdate:modelValue={(value: any) => {
              emit('update:modelValue', value)
            }}
            suffix="arrow-right"
            disabled={props.disabled}
            placeholder={props.placeholder}
          ></IvyInput>
          <Teleport to="body" disabled={!props.teleport}>
            <Transition name="ivy-zoom-in-top">
              {withDirectives(
                <div v-show={visible.value} class="ivy-transfer">
                  <ul ref="scrollbar" class="ivy-select__scroll">
                    {children.map((c) => (
                      <IvyOption {...c.props} />
                    ))}
                  </ul>

                  {children.length === 0 ? (
                    <p class="ivy-select-dropdown__empty">{props.emptyText ?? '暂无数据'}</p>
                  ) : null}
                </div>,
                [[clickOutside, handleClose]]
              )}
            </Transition>
          </Teleport>
        </div>
      )
    }
  }
})
