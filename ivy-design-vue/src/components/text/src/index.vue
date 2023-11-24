<script setup lang="ts">
import { computed } from 'vue'
import { prefix } from '@/shared'

defineOptions({
  name: `${prefix}text`
})

const props = defineProps({
  type: {
    type: String,
    validator: (val: string) => {
      return ['primary', 'success', 'warning', 'danger', 'info'].includes(val)
    }
  },
  lineClamp: {
    type: [Number, String]
  },
  truncated: Boolean
})

const style = computed(() => {
  const style: Record<string, string> = {}

  if (props.lineClamp) {
    style['-webkit-line-clamp'] = `${props.lineClamp}`
  }

  return style
})
</script>

<template>
  <span
    :class="['ivy-text', { 'is-truncated': props.truncated, 'is-line-clamp': props.lineClamp }]"
    :type="props.type"
    :style="style"
  >
    <slot></slot>
  </span>
</template>
