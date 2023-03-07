import { computed, defineComponent, inject, withModifiers } from "vue";
import { prefix, Type } from "@/utils/index";

export default defineComponent({
  name: `${prefix}option`,
  props: {
    value: [String, Number],
    label: String,
    disabled: Boolean,
  },
  inject: {
    select: {
      default: {},
    },
  },

  setup(props) {
    const updateLabel = inject<Function | null>("updateLabel", null);
    const closeDropdown = inject<Function | null>("closeDropdown", null);

    const curLabel = computed(() => {
      if (props.label) {
        return props.label;
      }
      return Type.isObject(props.value) ? "" : props.value;
    });
    const handleClick = () => {
      if (props.disabled) {
        return;
      }
      if (updateLabel) {
        updateLabel?.(props.label);
      }
      if (closeDropdown) {
        closeDropdown();
      }
    };
    return () => {
      return (
        <li
          class={["ivy-option", { "is-disabled": props.disabled }]}
          onClick={withModifiers(handleClick, ["stop"])}
        >
          <slot>
            <span>{curLabel.value}</span>
          </slot>
        </li>
      );
    };
  },
});
