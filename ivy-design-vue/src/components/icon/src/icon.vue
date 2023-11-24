<script setup lang="ts">
import { prefix } from '@/shared'
import './symbol'

defineOptions({
  name: `${prefix}icon`
})

const props = defineProps({
  name: String,
  size: [Number, String]
})
</script>

<template>
  <svg class="ivy-icon" :style="{ fontSize: props.size }">
    <use :href="`#${props.name}`"></use>
  </svg>
</template>
