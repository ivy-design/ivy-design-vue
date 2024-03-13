<script setup lang="ts">
import { ref, provide, inject, computed } from 'vue'
import { prefix } from '@/shared'

defineOptions({
  name: `${prefix}command-group`
})

interface Props {
  label: String
}
const props = withDefaults(defineProps<Props>(), {})

const groupItems = ref<any[]>([])
const appendGroupItems = (item: any) => {
  groupItems.value.push(item)
}
provide('appendGroupItems', appendGroupItems)

const dest = inject('dest', ref<any>(null))

const isShow = computed(() => {
  if (dest.value === null) return true
  return dest.value.some((item: any) => groupItems.value.includes(item))
})
</script>

<template>
  <div class="ivy-command-group" v-if="isShow">
    <div class="ivy-command-group-label">
      <slot name="label">{{ props.label }}</slot>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss">
.ivy-command-group {
  display: block;
  &-label {
    color: var(--ivy-command-group-label-color);
    padding: 4px 12px;
  }
}
</style>
