<script setup lang="ts">
import { computed, ref } from 'vue'
import { prefix, type IvyTheme } from '@/shared/index'
import usePopper from '@/hooks/usePopper'
import { type Placement } from '@floating-ui/vue'

const prefixCls = 'ivy-tooltip'

defineOptions({
  name: `${prefix}tooltip`
})

interface Props {
  placement: Placement
  content: string
  delay: number
  disabled: boolean
  controlled: boolean
  always: boolean
  transfer: boolean
  theme: IvyTheme
  maxWidth: string
  teleported: boolean
}

const props = withDefaults(defineProps<Props>(), {
  content: '',
  delay: 100,
  disabled: false,
  controlled: false,
  always: false,
  teleported: false
})

const conf = computed(() => {
  return {
    placement: props.placement
  }
})

const { visible, referenceEl, floatEl, floatArrow, createPopper } = usePopper(conf.value)

const { middlewareData, floatingStyles, update, finalPlacement } = createPopper()

const timeout = ref<any>(null)

const handleShowPopper = () => {
  if (timeout.value) clearTimeout(timeout.value)
  timeout.value = setTimeout(() => {
    visible.value = true
    update()
  }, props.delay)
}
const handleClosePopper = () => {
  if (timeout.value) {
    clearTimeout(timeout.value)
    if (!props.controlled) {
      timeout.value = setTimeout(() => {
        visible.value = false
      }, 100)
    }
  }
}
</script>

<template>
  <div :class="prefixCls" @mouseenter="handleShowPopper" @mouseleave="handleClosePopper">
    <div :class="[prefixCls + '-rel']" ref="referenceEl">
      <slot></slot>
    </div>
    <teleport to="body" :disabled="!props.teleported">
      <transition name="fade">
        <div
          :class="[prefixCls + '-popper', prefixCls + '-' + props.theme]"
          ref="floatEl"
          v-show="!props.disabled && (visible || props.always)"
          @mouseenter="handleShowPopper"
          @mouseleave="handleClosePopper"
          :style="{ ...floatingStyles }"
          :data-placement="finalPlacement"
        >
          <div
            :class="prefixCls + '-arrow'"
            ref="floatArrow"
            :data-placement="finalPlacement"
            :style="{
              left: middlewareData.arrow?.x != null ? `${middlewareData.arrow.x}px` : '',
              top: middlewareData.arrow?.y != null ? `${middlewareData.arrow.y}px` : ''
            }"
          ></div>
          <div :class="`${prefixCls}-inner`" :style="{ maxWidth: props.maxWidth }">
            <slot name="content">{{ props.content }}</slot>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
  <!-- 
  
  
      
    
 -->
</template>
