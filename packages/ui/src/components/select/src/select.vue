<template>
  <div :class="['ivy-select', { 'is-focus': visible }]" @lick="handleClick">
    <div>
      <input type="text" />
    </div>
    <teleport to="body" :disabled="!teleport">
      <transition name="ivy-zoom-in-top">
        <div v-show="visible" class="ivy-transfer" v-clickOutside="handleClose">
          <ul ref="scrollbar" class="ivy-select__scroll">
            <slot></slot>
          </ul>
          <p class="ivy-select-dropdown__empty" v-if="children.length === 0">
            {children.length === 0 ? props.emptyText ?? "暂无数据" : ""}
          </p>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  provide,
  reactive,
  type ComponentOptions,
  toRef,
} from "vue";
import { prefix } from "@/utils/index";
import clickOutside from "../../../directives/click-outside";

export default defineComponent({
  name: `${prefix}select`,
  directives: { clickOutside },
  props: {
    emptyText: String,
    modelValue: [String, Number],
    disabled: Boolean,
    teleport: Boolean,
    placeholder: {
      type: String,
      default: "请选择",
    },
  },
  emits: ["update:modelValue", "change", "visible-change"],
  setup(props, { slots, emit }) {
    const visible = ref<boolean>(false);
    const handleClose = () => {
      visible.value = false;
      emit("visible-change", false);
    };

    const curValue = toRef(props, "modelValue");
    const curLabel = ref<number | string>("");

    const updateLabel = (value: string | number) => {
      curLabel.value = value;
    };
    const updateValue = (value: string | number) => {
      emit("update:modelValue", value);
      emit("change", value);
    };

    provide("updateLabel", updateLabel);
    provide("updateValue", updateValue);
    provide("closeDropdown", handleClose);

    const children: any[] = reactive(slots.default?.() || []);
    onMounted(() => {
      children.find((c) => {
        if (c.props.value === curValue.value) {
          updateLabel(c.props.label || c.props.value);
        }
      });
    });

    const handleClick = () => {
      visible.value = true;
      emit("visible-change", true);
    };
    return {
      visible,
      curValue,
      curLabel,
      children,
      handleClick,
      handleClose,
    };
  },
});
</script>
