import { h, defineComponent, inject, type PropType, computed } from 'vue'
import { prefix } from '@/shared'
import { useBrowserLocation } from '@/hooks/useBrowserLocation'

export default defineComponent({
  name: `${prefix}breadcrumb-item`,
  props: {
    separator: String,
    href: String,
    clickable: {
      type: Boolean,
      default: true
    },
    onClick: Function as PropType<(e: MouseEvent) => void>
  },
  setup(props, { slots }) {
    const separator = inject('separator')
    const htmlTagRef = computed(() => (props.href ? 'a' : 'span'))
    const browserLocationRef = useBrowserLocation()
    const ariaCurrentRef = computed(() =>
      browserLocationRef.value.href === props.href ? 'location' : null
    )

    return () => (
      <div class="ivy-breadcrumb-item">
        {h(
          htmlTagRef.value,
          {
            class: 'ivy-breadcrumb-item-text',
            'aria-current': ariaCurrentRef.value,
            href: props.href,
            onClick: props.onClick
          },
          slots.default?.() ?? []
        )}
        <div class="ivy-breadcrumb-item-symbol" aria-hidden="true">
          {props.separator ?? separator}
        </div>
      </div>
    )
  }
})
