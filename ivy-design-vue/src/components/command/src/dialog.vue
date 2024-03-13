<script setup lang="ts">
import { provide, computed } from 'vue'
import { prefix } from '@/shared'

defineOptions({
  name: `${prefix}command-dialog`,
  inheritAttrs: false
})

interface Props {
  modelValue: boolean
  hideMask: boolean
  appendToBody: boolean
  width: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  hideMask: false,
  appendToBody: true,
  width: '580px'
})

const emit = defineEmits(['update:modelValue'])

const visible = computed({
  get: () => props.modelValue,
  set: (val) => {
    if (val === props.modelValue) return
    emit('update:modelValue', val)
  }
})
provide('visible', visible)

const handleOpen = () => {
  visible.value = true
}

defineExpose({
  open: handleOpen
})

const handleClose = () => {
  visible.value = false
}
provide('handleClose', handleClose)
</script>

<template>
  <teleport to="body" :disabled="!props.appendToBody">
    <transition>
      <div class="ivy-command-dialog" v-show="visible" :style="{ width: props.width }">
        <div class="mask" v-if="!props.hideMask"></div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss">
.ivy-command-dialog {
  --ivy-command-dialog-mask-background: rgba(0, 0, 0, 0.5);
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--ivy-command-dialog-mask-background);
  z-index: 1000;
}

.content {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1001;
  width: 580px;
}
</style>
