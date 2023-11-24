<template>
  <div
    class="fox-input-number"
    :class="[{ 'is-controls-right': !!controlsPosition }, { 'is-disabled': disabled }, getSize]"
    :style="getWidth"
  >
    <span class="fox-input-number__decrease" @click="minus">
      <fox-icon name="dash"></fox-icon>
    </span>
    <span class="fox-input-number__increase" @click="add">
      <fox-icon name="plus"></fox-icon>
    </span>
    <fox-input
      class="fox-input-number-inner"
      :readonly="!editable"
      :size="size"
      :disabled="disabled"
      v-model.number="curValue"
      :max="max"
      :min="min"
      @blur="blur"
      @change="inputs"
      @focus="handleFoucs"
    ></fox-input>
  </div>
</template>

<script lang="ts">
import { prefix } from '@/shared/index'
import FoxIcon from '@/components/icon'
import FoxInput from '../../input/src/index'

export default {
  name: `${prefix}input-number`,
  components: { FoxIcon, FoxInput },

  props: {
    value: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
    },
    name: {
      type: String
    },
    size: {
      type: String,
      validator(value: string) {
        return ['large', 'small', 'mini'].indexOf(value) !== -1
      }
    },
    controlsPosition: {
      type: String,
      validator(value: string) {
        return ['right'].indexOf(value) !== -1
      }
    },
    width: Number,
    editable: {
      type: Boolean,
      default: true
    },
    precision: {
      type: Number,
      default: 0,
      validator(value: number) {
        return value.toString().indexOf('.') === -1 && value >= 0
      }
    }
  },
  data() {
    return {
      curValue: 0,
      isFocus: false,
      popper: null
    }
  },
  mounted() {
    this.curValue = this.value.toFixed(this.precision) as any
  },
  methods: {
    add() {
      if (this.disabled) return
      let differ = this.max - Number(this.curValue)
      if (differ > this.step) {
        this.curValue = Number(this.curValue) + this.step
      } else if (differ < this.step && differ > 0) {
        this.curValue = this.max
      } else {
        return
      }
      this.$emit('change', this.curValue)
    },
    minus() {
      if (this.disabled) return
      let differ = this.curValue - this.min
      if (differ > this.step) {
        this.curValue = this.curValue - this.step
      } else if (differ < this.step && differ > 0) {
        this.curValue = this.min
      } else {
        return
      }
      this.$emit('change', this.curValue)
    },
    blur(ev: Event) {
      this.$emit('blur', ev)
      this.$emit('change', Number(this.curValue))
      // this.dispatch("foxFormItem", "on-form-blur", Number(this.curValue));
    },
    inputs() {
      // this.dispatch("foxFormItem", "on-form-change", Number(this.curValue));
    },
    handleFoucs(ev: Event) {
      this.$emit('focus', ev)
    }
  },
  computed: {
    getSize() {
      if (this.size) {
        return `fox-input-number--${this.size}`
      } else {
        return ''
      }
    },
    getWidth() {
      return { width: `${this.width}+px` }
    }
  },
  watch: {
    value(val) {
      this.curValue = Number(val).toFixed(this.precision) as any
    }
  }
}
</script>

<style lang="scss">
@import '@/style/input-number.scss';
</style>
