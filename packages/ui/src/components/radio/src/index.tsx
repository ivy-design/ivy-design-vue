import { computed, defineComponent, inject, onMounted, ref, toRef } from "vue";
import { prefix } from "@/utils/index";

import type { IvyRadioGroupValue } from "./group";

export default defineComponent({
  name: `${prefix}radio`,
  props: {
    modelValue: {
      type: [Number, String, Boolean],
    },
    label: {
      type: [String, Number, Boolean],
    },
    disabled: Boolean,
    name: String,
  },
  setup(props, { emit, slots }) {
    const updateGroupValue = inject(
      "updateGroupValue",
      (val: IvyRadioGroupValue) => val
    );

    const currentVal = ref(props.modelValue);

    const isDisabled =
      toRef(props, "disabled") || inject("disabled", ref(false));

    const hasParent = inject("hasParent", false);
    const groupValue = inject("value", ref(""));
    const groupName = inject("name", ref(undefined));

    const isChecked = computed(() => {
      if (hasParent) {
        return groupValue.value === props.label;
      } else {
        return currentVal.value === props.label;
      }
    });

    const name = computed(() => {
      if (hasParent) {
        return groupName.value || groupValue.value;
      } else {
        return props.name || props.label;
      }
    });

    const handleChange = (ev: any) => {
      if (props.disabled) {
        return false;
      }
      const checked = ev.target?.checked || false;
      console.log(ev);
      if (hasParent) {
        if (checked) updateGroupValue(props.label as IvyRadioGroupValue);
      } else {
        currentVal.value = ev.target?.checked ? props.label : false;
        emit("update:modelValue", currentVal.value);
      }
    };

    return () => {
      return (
        <label class="ivy-radio">
          <span
            class={[
              "ivy-radio__input",
              { "is-checked": isChecked.value },
              { "is-disabled": isDisabled.value },
            ]}
          >
            <span class="ivy-radio__inner"></span>
            <input
              value={props.label}
              name={name.value as any}
              type="radio"
              tabIndex="-1"
              hidden
              onChange={handleChange}
            />
          </span>

          <span class="ivy-radio__label">{slots.default?.()}</span>
        </label>
      );
    };
  },
});
