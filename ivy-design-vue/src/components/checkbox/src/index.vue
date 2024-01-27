<script setup lang="ts">
import { ref, inject, computed, onMounted } from 'vue'
import { prefix, type IvyInputValue } from '@/shared/index'

defineOptions({
  name: `${prefix}checkbox`
})

interface Props {
  modelValue: IvyInputValue
  label: IvyInputValue
  trueLabel: IvyInputValue
  falseLabel: IvyInputValue
  disabled: boolean
  indeterminate: boolean | null
  name: string
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  label: false,
  trueLabel: true,
  falseLabel: false,
  disabled: false,
  indeterminate: null
})

const emit = defineEmits(['change', 'update:modelValue'])

const curValue = ref(props.modelValue)
const group = inject('group', false)
const updateValue = inject('updateValue', (val: IvyInputValue, type: 'add' | 'remove') => {
  return { val, type }
})

const hasValue = inject('hasValue', (val: IvyInputValue): boolean => !!val)

const isChecked = computed(() => {
  if (group) {
    return hasValue(props.label)
  } else {
    if (props.indeterminate === null) {
      return curValue.value === props.trueLabel
    }
    return props.indeterminate && !!curValue.value
  }
})

const handleChange = (ev: Event) => {
  if (props.disabled) return
  const checked = (ev.target as HTMLInputElement).checked
  console.log('checked', checked)
  if (group) {
    if (checked) {
      updateValue(props.label, 'add')
    } else {
      updateValue(props.label, 'remove')
    }
  } else {
    curValue.value = checked ? props.trueLabel : props.falseLabel
    console.log('current', curValue.value)
    emit('change', curValue.value)
    emit('update:modelValue', curValue.value)
    // this.dispatch("FormItem", "on-form-change", value);
  }
}

onMounted(() => {
  console.log('mounted', props.indeterminate)
  if (group) {
    if (hasValue(props.label)) {
      emit('change', props.label)
    }
  } else {
    if (props.modelValue === props.trueLabel) {
      emit('change', props.trueLabel)
    } else if (props.modelValue === props.falseLabel) {
      emit('change', props.falseLabel)
    }
  }
})
</script>
<template>
  <label class="ivy-checkbox">
    <span
      :class="[
        'ivy-checkbox__input',
        { 'is-checked': isChecked },
        { 'is-disabled': props.disabled },
        { 'is-indeterminate': props.indeterminate }
      ]"
    >
      <span class="ivy-checkbox__inner"></span>
      <input
        value="label"
        type="checkbox"
        tabindex="-1"
        :checked="isChecked"
        hidden
        :name="props.name"
        @change="handleChange"
      />
    </span>

    <span :class="['ivy-checkbox__label', { 'is-disabled': props.disabled }]">
      <slot />
    </span>
  </label>
</template>
