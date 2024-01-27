<script setup lang="ts">
import { provide, ref } from 'vue'
import { prefix, type IvyInputValue } from '@/shared/index'

defineOptions({
  name: `${prefix}checkbox-group`
})

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['change', 'update:modelValue'])

const curValue = ref(props.modelValue)
const addValue = (val: IvyInputValue) => {
  curValue.value.push(val)
  emit('update:modelValue', curValue.value)
  emit('change', curValue.value)
  //   this.dispatch("FormItem", "on-form-change", curValue.value);
}
const removeValue = (val: IvyInputValue) => {
  const index = curValue.value.indexOf(val)
  curValue.value.splice(index, 1)
  emit('change', curValue.value)
  //   this.dispatch("FormItem", "on-form-change", curValue.value);
}
provide('updateValue', (val: IvyInputValue, type: 'add' | 'remove') => {
  if (type === 'add') {
    addValue(val)
  } else if (type === 'remove') {
    removeValue(val)
  }
})

provide('hasValue', (val: IvyInputValue) => curValue.value.includes(val))

provide('group', true)
</script>

<template>
  <div class="ivy-checkbox-group">
    <slot></slot>
  </div>
</template>
