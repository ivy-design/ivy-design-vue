import { computed, defineComponent, onUpdated, ref, nextTick } from 'vue'
import { prefix, type IvySize } from '@/shared/index'
import IvyIcon from '@/components/icon'

export default defineComponent({
  name: `${prefix}input`,
  props: {
    modelValue: [String, Number],
    clearable: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    prefix: String,
    suffix: String,
    type: {
      type: String,
      default: 'text'
    },
    size: {
      type: String,
      default: 'medium',
      validator(value: IvySize) {
        return ['large', 'small', 'medium'].includes(value)
      }
    },
    max: Number,
    min: Number,
    placeholder: {
      type: String,
      default: '',
      required: false
    }
  },
  emits: ['update:modelValue', 'change', 'input', 'focus', 'clear', 'blur'],
  setup(props, { slots, emit }) {
    const curValue = ref(props.modelValue)
    const isFocus = ref(false)
    const isHover = ref(false)

    const mouseEnter = () => {
      isHover.value = true
    }
    const mouseLeave = () => {
      isHover.value = false
    }

    const handleFocus = (ev: Event) => {
      isFocus.value = true
      emit('focus', ev)
    }
    const blur = (ev: Event) => {
      isFocus.value = false
      emit('blur', ev)
    }

    const clear = () => {
      curValue.value = null as any
      emit('update:modelValue', curValue.value)
      emit('change', curValue.value)
      emit('clear')
    }

    const showCloseIcon = computed(() => {
      if (props.disabled) return false
      if (props.clearable && curValue.value) {
        if (isFocus.value || isHover.value) {
          return true
        }
        return false
      }
      return false
    })

    /**合成事件 composition */
    const isComposition = ref(false)
    const updateCompositionStatus = (status: boolean = false) => {
      isComposition.value = status
    }

    const handleCompositionStart = () => {
      updateCompositionStatus(true)
    }
    const handleCompositionEnd = () => {
      updateCompositionStatus(false)
    }

    const handleInput = (ev: any) => {
      if (isComposition.value) return
      curValue.value = ev.target?.value
      emit('input', curValue.value)
      emit('update:modelValue', curValue.value)
    }

    const handleChange = () => {
      emit('change', curValue.value)
    }

    onUpdated(() => {
      nextTick(() => {
        curValue.value = props.modelValue
      })
    })

    return () => {
      return (
        <div
          class={['ivy-input', { 'is-disabled': props.disabled }, `ivy-input--${props.size}`]}
          onMouseenter={mouseEnter}
          onMouseleave={mouseLeave}
        >
          <div class={['ivy-input__wrapper', { 'is-focus': isFocus.value }]}>
            <div class="ivy-input--prefix">
              {slots.prefix ? (
                slots.prefix?.()
              ) : props.prefix ? (
                <IvyIcon class="ivy-input--icon" name={props.prefix}></IvyIcon>
              ) : null}
            </div>

            {props.readonly ? (
              <input
                readonly
                class="ivy-input__inner"
                max="max"
                min="min"
                placeholder={props.placeholder}
                disabled={props.disabled}
                type={props.type}
                value={curValue.value}
                onFocus={handleFocus}
                onBlur={blur}
                onInput={handleInput}
              />
            ) : (
              <input
                class="ivy-input__inner"
                max="max"
                min="min"
                placeholder={props.placeholder}
                disabled={props.disabled}
                type={props.type}
                value={curValue.value}
                onFocus={handleFocus}
                onBlur={blur}
                onInput={handleInput}
                onCompositionstart={handleCompositionStart}
                onCompositionend={handleCompositionEnd}
                onChange={handleChange}
              />
            )}
            <div class="ivy-input--suffix">
              {slots.suffix ? (
                slots.suffix?.()
              ) : showCloseIcon.value ? (
                <IvyIcon name="circle-close" class="ivy-input-close" onClick={clear}></IvyIcon>
              ) : props.suffix ? (
                <IvyIcon class="ivy-input--icon" name={props.suffix}></IvyIcon>
              ) : null}
            </div>
          </div>
        </div>
      )
    }
  }
})
