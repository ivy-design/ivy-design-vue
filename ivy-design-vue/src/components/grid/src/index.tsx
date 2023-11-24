import { defineComponent, ref, onMounted, type PropType, onBeforeMount } from 'vue'
import { prefix } from '@/shared'

export type IvyGridMode = 'grid' | 'flex'

export default defineComponent({
  name: `${prefix}grid`,
  props: {
    mode: {
      type: String as PropType<IvyGridMode>,
      default: 'grid',
      validator: (val: string) => {
        return ['grid', 'flex'].includes(val)
      }
    },
    square: Boolean,
    border: {
      type: Boolean,
      default: true
    },
    cols: {
      type: Number,
      default: 3
    }
  },
  setup(props, { slots }) {
    const wrapRef = ref<HTMLElement | null>(null)
    let resizeObserver: null | ResizeObserver = null

    const wrapResize = () => {
      resizeObserver = new ResizeObserver((entries) => {
        requestAnimationFrame(() => {
          for (const entry of entries) {
            if (entry.contentBoxSize) {
              const contentBoxSize = Array.isArray(entry.contentBoxSize)
                ? entry.contentBoxSize[0]
                : entry.contentBoxSize

              wrapRef.value?.style.setProperty(
                '--ivy-grid-col-height',
                `${(contentBoxSize.inlineSize as number) / props.cols}px`
              )
            }
          }
        })
      })
      resizeObserver.observe(wrapRef.value as Element)
    }
    onMounted(() => {
      if (props.square) {
        wrapResize()
      }
    })
    onBeforeMount(() => {
      resizeObserver?.disconnect()
    })
    return () => (
      <div
        class={['ivy-grid', `ivy-grid--${props.mode}`, { 'is-border': props.border }]}
        ref={wrapRef}
        style={{ '--ivy-grid-cols': props.cols }}
      >
        {slots.default?.()}
      </div>
    )
  }
})
