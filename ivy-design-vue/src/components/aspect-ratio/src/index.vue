<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { prefix } from '@/shared'
import { useEventListener } from '@vueuse/core'

defineOptions({
  name: `${prefix}aspect-ratio`
})

const props = defineProps({
  ratio: {
    type: String,
    default: '1/1',
    validator: (value: string) => {
      const [ratioX = 1, ratioY = 1] = value.split('/')
      return !isNaN(Number(ratioX)) && !isNaN(Number(ratioY))
    }
  }
})

const width = ref<number>(0)
const height = ref<number | string>(0)

const el = ref<HTMLElement>()
const resize = () => {
  const rect = el.value?.getBoundingClientRect()

  console.log(rect, 'rect')
  const [ratioX = 1, ratioY = 1] = props.ratio.split('/')
  width.value = rect?.width || 0
  const tmp = (width.value / Number(ratioX)) * Number(ratioY)
  height.value = `${tmp}px`
  console.log(height.value)
}

watch(
  () => props.ratio,
  () => {
    resize()
  }
)

onMounted(() => {
  resize()
  useEventListener(window, 'resize', resize)
})
</script>

<template>
  <div class="ivy-aspect-ratio" ref="el" :style="{ height: height }">
    <slot></slot>
  </div>
</template>

<style></style>
