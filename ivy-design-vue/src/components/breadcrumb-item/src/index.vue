<script setup lang="ts">
import { inject, computed } from 'vue'
import { prefix } from '@/shared'
import { useBrowserLocation } from '@/hooks/useBrowserLocation'

defineOptions({
  name: `${prefix}breadcrumb-item`
})

interface Props {
  separator: string
  href: string
  clickable: boolean
  onClick: (e: MouseEvent) => void
}

const props = withDefaults(defineProps<Props>(), {
  separator: '',
  href: '',
  clickable: true,
  onClick: () => {}
})

const injectSeparator = inject('separator')
const htmlTagRef = computed(() => (props.href ? 'a' : 'span'))
const browserLocationRef = useBrowserLocation()
const ariaCurrentRef = computed(() =>
  browserLocationRef.value.href === props.href ? 'location' : null
)
</script>

<template>
  <div class="ivy-breadcrumb-item">
    <component
      :is="htmlTagRef"
      class="ivy-breadcrumb-item-text"
      :aria-current="ariaCurrentRef"
      :href="props.href"
      @click="props.onClick"
    >
      <slot></slot>
    </component>

    <div class="ivy-breadcrumb-item-symbol" aria-hidden="true">
      {{ props.separator ?? injectSeparator }}
    </div>
  </div>
</template>
