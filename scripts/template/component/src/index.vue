<script setup lang="ts">
import { prefix } from '@/shared'

defineOptions({
  name: `${prefix}text`
})

const props = defineProps({
  type: String
})
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>
