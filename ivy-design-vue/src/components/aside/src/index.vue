<script setup lang="ts">
import { prefix } from '@/shared'

defineOptions({
  name: `${prefix}aside`
})

const props = defineProps({
  width: {
    type: String,
    default: '300px'
  }
})
</script>
<template>
  <div class="ivy-layout-aside" :style="{ width: props.width }">
    <slot />
  </div>
</template>
