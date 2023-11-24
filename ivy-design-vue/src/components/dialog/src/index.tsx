import { defineComponent, Teleport, ref, Transition, watch, withModifiers } from 'vue'
import { prefix } from '@/shared'

type CloseType = 'close' | 'cancel'

export default defineComponent({
  name: `${prefix}dialog`,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    footerHide: Boolean,
    appendToBody: Boolean,
    maskOnClickClose: {
      type: Boolean,
      default: true
    },
    header: String,
    width: {
      type: String,
      default: '560px'
    },
    confirmButtonText: {
      type: String,
      default: '确认'
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    }
  },
  emits: ['close', 'open', 'confirm', 'update:modelValue'],
  setup(props, { slots, emit }) {
    const visible = ref(props.modelValue)

    watch(
      () => props.modelValue,
      (val, oldVal) => {
        if (val !== oldVal) {
          if (val) {
            emit('open')
          }
          visible.value = val
        }
      }
    )

    const handlerClose = (type: CloseType) => {
      visible.value = false
      emit('close', type)
      emit('update:modelValue', visible.value)
    }

    const handlerConfirm = (type: CloseType) => {
      emit('confirm', type)
    }

    return () => (
      <Teleport to="body" disabled={props.appendToBody}>
        <Transition name="dialog">
          <div
            v-show={visible.value}
            class="ivy-dialog__mask"
            onClick={withModifiers(() => {
              props.maskOnClickClose ? handlerClose('close') : null
            }, ['self'])}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={props.header}
              class="ivy-dialog-container"
              style={{ width: props.width }}
            >
              <div class="ivy-dialog-content">
                {slots.header ? (
                  slots.header?.()
                ) : (
                  <div class="ivy-dialog__header">{props.header}</div>
                )}
                <div class="ivy-dialog__body">{slots.default?.()}</div>
                {props.footerHide ? (
                  []
                ) : (
                  <div class="ivy-dialog__footer">
                    <ivy-button onClick={() => handlerClose('cancel')}>
                      {props.cancelButtonText}
                    </ivy-button>{' '}
                    <ivy-button type="primary" onClick={() => handlerConfirm}>
                      {props.confirmButtonText}
                    </ivy-button>
                  </div>
                )}
              </div>
              <div class="ivy-dialog__close" onClick={() => handlerClose('close')}>
                <ivy-icon name="close"></ivy-icon>
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>
    )
  }
})
